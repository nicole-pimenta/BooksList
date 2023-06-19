import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #f1ffeb;
  height: 95%;
  width: 55%;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h4 {
    width: 90%;
    margin: 10px auto;
  }

  ul {
    height: 90%;
    width: 95%;
    margin: 0 auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 15px auto;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;
