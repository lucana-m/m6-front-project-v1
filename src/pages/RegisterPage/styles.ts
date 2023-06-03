import styled from "styled-components";

export const FormBox = styled.main`
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray-100);

  .bgBox {
    width: 400px;
    height: max-content;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: var(--gray-100);
    border: 1.5px groove;
    border-radius: 30px;
    background-color: var(--gray-0);
  }

  .topBox {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-family: "Calibri", sans-serif;
      font-size: 36px;
    }

    p {
      font-size: 24px;
      font-weight: 600;
      font-family: "Calibri", sans-serif;
    }
  }

  form {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary);
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 15px;

    .inputBox {
      width: 90%;
      height: max-content;
      display: flex;
      flex-direction: column;
      border-radius: 30px;
      gap: 5px;

      label {
        font-size: 20px;
        font-weight: 600;
        font-family: "Calibri", sans-serif;
        color: var(--gray-100);
        margin-left: 10px;
      }

      input {
        height: 40px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        font-family: "Calibri", sans-serif;
      }
    }

    button {
      width: 90%;
      height: 50px;
      background-color: var(--secondary);
      font-family: "Calibri", sans-serif;
      font-size: 25px;
      font-weight: 700;
      border-radius: 20px;
      color: var(--gray-100);
      margin-top: 10px;
    }
  }
`;
