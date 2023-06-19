import styled from "styled-components";

export const StyledCard = styled.div`
  height: 87px;
  max-height: 156px;
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  border-left: 4px solid #03b898;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledValueDescription = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;

  p,
  span {
    text-align: left;
    width: 90%;
  }
`;

export const StyledValueSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  button {
    height: 29px;
    width: 58px;
    border-radius: 2px;
    background-color: #e9ecef;
  }

  button:hover {
    background-color: #03b898;
  }
`;
