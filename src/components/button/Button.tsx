import styled, { css } from 'styled-components';

interface CustomButtonProps {
  primary?: boolean;
  children: string | React.ReactNode;
  secondary?: boolean;
  name: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ type, children, ...props }: CustomButtonProps) => {
  return (
    <StyledButton type={type || 'button'} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const primaryStyles = css`
  background: #ffd814;
  border-color: #fcd200;

  &:hover {
    background: #f7ca00;
    border-color: #f2c200;
  }

  &:active {
    background: #f0b800;
  }
`;

const secondaryStyles = css`
  background: #ffa41c;
  border-color: #ff8f00;
  box-shadow: none;

  &:hover {
    background: #fa8900;
  }

  &:active {
    background: #ffa41c;
  }
`;

const StyledButton = styled.button<CustomButtonProps>`
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  width: 100%;
  cursor: pointer;
  transition: all 0.1s linear;
  line-height: 19px;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 10px 0 11px;
  border: none;
  vertical-align: middle;
  color: #0f1111;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  padding: 0;
  text-decoration: none;
  &:active {
    border-color: #008296;
    box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
  }
  ${(props) =>
    props.primary ? primaryStyles : props.secondary ? secondaryStyles : null}
`;
