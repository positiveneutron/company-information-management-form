import styled from "styled-components";

export const Divider = styled.div`
  border-bottom: ${props => (props.horizontal ? "100px solid grey" : 0)};
  border-left: ${props => (props.vertical ? "1px solid grey" : 0)};
  height: ${props => (props.vertical ? "500px" : 0)};
  margin-right: 25px;
  margin-left: 25px;
`;
