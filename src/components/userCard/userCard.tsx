import { StyledUserCard, NoteUserIcon } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface UserProfileProps {
  name: string | undefined;
  email: string | undefined;
}

export const UserProfile = ({ name, email }: UserProfileProps) => {
  const { setOpenModal, logout } = useContext(UserContext);

  return (
    <StyledUserCard>
      <NoteUserIcon />
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => setOpenModal(true)}>Editar Informações</button>
      <button onClick={() => logout()}>Sair</button>
    </StyledUserCard>
  );
};
