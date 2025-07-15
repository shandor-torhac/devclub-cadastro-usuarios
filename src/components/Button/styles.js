import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.theme === "primary"
        ? '"linear-gradient(180deg, #ff8162 0%, #ff7085 100%)"'
        : "rgba(255, 255, 255, 0.1)"};
  }

  &:active {
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg, #e96d54 0%, #e4566d 100%)"
        : "rgba(255, 255, 255, 0.2)"};
    transform: scale() 0.97;
  }
`;
