import React from "react";
import { HorizontalLayout, Divider } from "../../components/index";
import CreateCompany from "./forms/CreateCompany";
import CreateOffice from "./forms/CreateOffice";

const FormArea = () => (
  <HorizontalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
    margin="30px"
  >
    <CreateCompany />
    <Divider vertical />
    <CreateOffice />
  </HorizontalLayout>
);

export default FormArea;
