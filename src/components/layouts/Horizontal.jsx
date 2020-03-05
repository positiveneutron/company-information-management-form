import styled from "styled-components";

export const HorizontalLayout = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : 0)};
  margin: ${props => (props.margin ? props.margin : 0)};
  border: ${props => (props.border ? "1px solid #E0E1E2" : 0)};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)};
`;
