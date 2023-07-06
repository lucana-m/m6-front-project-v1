import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
  height: max-content;
  /* background-color: coral; */
  padding: 0px 10px 0px 10px;
  margin-top: 8px;

  form {
    width: 100%;
    height: max-content;
    color: var(--gray-100);
    /* background-color: yellow; */
  }

  label {
    color: var(--gray-100);
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 10px;
    font-size: 16px;
    font-family: "Calibri", sans-serif;
    border-style: solid;
    border-width: thin;
    border-color: var(--gray-100);
  }

  .buttonBox {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: end;
    margin-top: 8px;
  }

  button {
    width: 180px;
    height: 100%;
    background-color: var(--secondary);
    border-radius: 10px;
    font-size: 20px;
    font-family: "Calibri", sans-serif;
    font-weight: 600;
    color: var(--gray-100);
  }
`;
