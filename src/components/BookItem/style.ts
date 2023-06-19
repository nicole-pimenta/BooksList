import styled from "styled-components";

export const StyledCard = styled.div`
  height: 187px;
  /* max-height: 156px; */
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
  width: 80%;

  p,
  span {
    text-align: left;
    width: 90%;
  }

  section {
    overflow: auto;
    font-size: 12px;
    height: 90px;
    width: 90%;
    margin: 10px auto;
  }
`;

export const StyledValueSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

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

export const StyledTitle = styled.p`
  color: #03b898;
  font-weight: bolder;
  font-size: 20px;
`;
