import styled from "styled-components";

export const Divider = styled.div`
  border-bottom: ${props => (props.horizontal ? "1px solid grey" : 0)};
  border-left: ${props => (props.vertical ? "1px solid grey" : 0)};
  width: ${props => (props.customWidth ? props.customWidth : 0)};
  height: ${props => (props.customHeight ? props.customHeight : 0)};
  margin-right: ${props => (props.marginRight ? props.marginRight : "25px")};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "25px")};
`;
