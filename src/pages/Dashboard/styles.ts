import styled from "styled-components";

export const DashboardBox = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  gap: 2rem;

  .userArea {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .contactsArea {
    width: 75%;
    height: 100%;
    background-color: yellowgreen;
  }
`;
