import styled from "styled-components";

export const FormContainer = styled.div`
  height: 95%;
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 355px;
    height: 434px;
    padding: 20px;
    border: 1px solid #00000033;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #f1ffeb;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    button {
      height: 48px;
      width: 100%;
      border-radius: 8px;
      padding: 13px 20px 13px 20px;
      background: var(--color-primary);
      border: 2px solid #fd377e;
      color: var(--color-grey-2);
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      text-align: center;
    }

    button:hover {
      background: var(--color-primary-2);
    }
  }
`;

export const StyledMessageError = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: #03b898;
  width: 80%;
`;
