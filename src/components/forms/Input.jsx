import styled from "styled-components";

export const FormInput = styled.input`
  height: 35px;
  width: ${props => (props.customWidth ? props.customWidth : "100%")};
  border-radius: 8px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;
