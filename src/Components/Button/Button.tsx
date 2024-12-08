import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { BTN_PRIMARY, BTN_PRIMARY_HOVER, BTN_WARNING, BTN_WARNING_HOVER } from "../../constants/colors"

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: ${(props) =>
        props.size === "small"
        ? "12px"
        : props.size === "medium"
        ? "14px"
        : "15px"};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-weight: bold;
    border-radius: 5px;
    display: inline-block;
    color: #fff;
    background-color: ${(props) => (props.primary ? BTN_PRIMARY : BTN_WARNING)};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    padding: ${(props) =>
        props.size === "small"
        ? "7px 18px 8px"
        : props.size === "medium"
        ? "9px 25px 11px"
        : "14px 30px 16px"};
    &:hover {
        background-color: ${(props) => (props.primary ? (props.disabled ?  BTN_PRIMARY : BTN_PRIMARY_HOVER) : (props.disabled ? BTN_WARNING : BTN_WARNING_HOVER))};
    };
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;