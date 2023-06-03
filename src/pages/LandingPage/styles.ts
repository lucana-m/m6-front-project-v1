import styled from "styled-components";
import { VscNotebook } from "react-icons/vsc";

export const LandingPageBox = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray-100);

  div {
    width: 400px;
    height: 450px;
    background-color: var(--gray-0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1.5px groove;
    border-radius: 30px;

    .topBox {
      width: 225px;
      height: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 0px;

      h2 {
        /* font-family: "Arya", sans-serif; */
        font-family: "Calibri", sans-serif;
        font-size: 36px;
      }
    }

    .bottomBox {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      background-color: var(--primary);
      border: none;

      button {
        width: 80%;
        height: 60px;
        background-color: var(--secondary);
        font-family: "Calibri", sans-serif;
        font-size: 25px;
        font-weight: 700;
        border-radius: 20px;
        color: var(--gray-100);
      }
    }
  }
`;

export const NotebookIcon = styled(VscNotebook)`
  width: 125px;
  height: 125px;
  color: var(--primary);
  margin-top: 20px;
`;
