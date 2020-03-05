import React from "react";
import FormArea from "./FormArea";
import CompanyList from "./CompanyList";
import { VerticalLayout, Divider } from "../../components/index";

const index = props => (
  <VerticalLayout border borderRadius="15px" margin="30px">
    <FormArea />
    <Divider horizontal customWidth="530px" customHeight="1px" />
    <CompanyList />
  </VerticalLayout>
);

export default index;
