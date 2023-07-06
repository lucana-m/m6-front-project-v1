import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const StyledModal = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  .modalBox {
    width: 30%;
    height: max-content;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .modalHeader {
    height: 20px;
    display: flex;
    justify-content: space-between;
    color: var(--gray-100);
    font-weight: bolder;
  }
`;

export const IconClose = styled(MdClose)`
  color: var(--gray-100);
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;
