import React from "react";
import FormArea from "./FormArea";
import { VerticalLayout, Divider } from "../../components/index";

const index = props => (
  <VerticalLayout border borderRadius="15px" margin="30px">
    <FormArea />
    <Divider horizontal />
  </VerticalLayout>
);

export default index;
