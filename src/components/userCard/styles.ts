import styled from "styled-components";
import { VscNotebook } from "react-icons/vsc";

export const StyledUserCard = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px 0px 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  color: var(--gray-100);
  border-radius: 30px;

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }

  button {
    color: var(--gray-100);
    font-size: 15px;
  }
`;

export const NoteUserIcon = styled(VscNotebook)`
  width: 125px;
  height: 125px;
  color: var(--gray-100);
  margin-bottom: 20px;
`;
