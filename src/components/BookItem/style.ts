import styled from "styled-components";

export const StyledCard = styled.div`
  height: 87px;
  max-height: 156px;
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  border-left: 4px solid #03b898;
  border-color: ${(props) => props.color};
  background: var(--color-grey-2);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledValueDescription = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;

  background-color: ${(props) => props.color};

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
    height: 19px;
    width: 48px;
    border-radius: 2px;
    background-color: var(--color-grey-2);
  }

  button:hover {
    background-color: var(--color-grey-3);
  }
`;
