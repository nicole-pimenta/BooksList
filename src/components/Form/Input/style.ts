import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 53px;
    border-radius: 8px;
    padding: 0px 16px 0px 16px;
    border: 2px solid #f8f9fa;
    background: #e9ecef;
    color: #868e96;
  }

  @media (max-width: 800px) {
    input {
      max-width: 314px;
      height: 48px;
    }
  }
`;
