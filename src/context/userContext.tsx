import { createContext } from "react";
import { api } from "../services/api";
import { RegisterUserData, UserLogin } from "../schemas/userSchemas";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { UpdateUserRequest } from "../schemas/userSchemas";

interface UserProviderChildren {
  children: React.ReactNode;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface UserProviderValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  getUsers: () => Promise<void>;
  createUser: (data: RegisterUserData) => Promise<void>;
  login: (data: UserLogin) => Promise<void>;
  userContacts: Contact[];
  getUserContacts: (id: string) => Promise<void>;
  updateUser: (content: UpdateUserRequest) => Promise<void>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userContacts, setUserContacts] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const storageUser = localStorage.getItem("@USER");
    const user = storageUser ? JSON.parse(storageUser) : null;

    if (!token) {
      localStorage.removeItem("@USER");
      localStorage.removeItem("@TOKEN");
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
    setLoading(true);
  }, []);

  const createUser = async (data: RegisterUserData) => {
    try {
      await api.post("/users", data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data: UserLogin) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      // console.log(response.data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const allUsers = await api.get<UserResponse[]>("/users");

      const authenticatedUser = allUsers.data.filter(
        (user: UserResponse) => user.email === data.email
      )[0];

      const userObj: User = {
        id: authenticatedUser.id,
        name: authenticatedUser.name,
        email: authenticatedUser.email,
        phone: authenticatedUser.phone,
      };

      setUser(userObj);

      localStorage.setItem("@USER", JSON.stringify(userObj));
      localStorage.setItem("@TOKEN", token);

      navigate("/myNote");
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    navigate("/");
  };

  const updateUser = async (content: UpdateUserRequest) => {
    try {
      const { data } = await api.patch(`/users/${user?.id}`, content);
      const newData = { ...user, ...data };
      setUser(newData);
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const users = await api.get("");

      console.log(users.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserContacts = async (id: string) => {
    try {
      const contacts = await api.get(`/contacts/users/${id}`);
      console.log(contacts.data);
      setUserContacts(contacts.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUsers,
        createUser,
        login,
        loading,
        userContacts,
        getUserContacts,
        updateUser,
        openModal,
        setOpenModal,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
