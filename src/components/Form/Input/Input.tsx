import { forwardRef } from "react";
import { StyledInputContainer } from "./style";

export const Input = forwardRef(
  ({ label, id, placeholder, type, ...rest }, ref) => {
    return (
      <StyledInputContainer>
        {label ? <label htmlFor={id}>{label}</label> : null}⁠
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </StyledInputContainer>
    );
  }
);
