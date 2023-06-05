import { createContext } from "react";
import { UserData } from "../schemas/userSchema";
// import { SubmitHandler } from "react-hook-form/dist/types";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface authProviderData {
  registerSubmit: SubmitHandler<UserData>;
}

export const AuthContext = createContext({} as authProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const registerSubmit = async (data: UserData) => {
    try {
      const response = await api.post("/users", data);

      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ registerSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
