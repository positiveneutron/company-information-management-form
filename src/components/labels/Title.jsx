import styled from "styled-components";

export const TitleLabel = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : "24px")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  cursor: ${props => (props.clicked ? "pointer" : "default")};
  text-decoration: none;
`;
