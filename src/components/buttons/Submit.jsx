import styled from "styled-components";

export const SubmitButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e0e1e2;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-top: 10px;
  color: #717272;
  font-weight: bold;
  &:hover {
    background-color: #f1c40f;
  }
`;
