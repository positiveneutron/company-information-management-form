import React from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  Button
} from "../../../components/index";

const CreateCompany = () => (
  <VerticalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
  >
    <TitleLabel>Create Company</TitleLabel>
    <FormInputLabel>Name:</FormInputLabel>
    <FormInput type="text" placeholder="name" />
    <FormInputLabel>Address:</FormInputLabel>
    <FormInput type="text" placeholder="address" />
    <FormInputLabel>Revenue:</FormInputLabel>
    <FormInput type="number" placeholder="revenue" />
    <FormInputLabel>Phone No:</FormInputLabel>
    <HorizontalLayout>
      <FormInput type="number" placeholder="code" customWidth="45px" />
      <FormInput type="number" placeholder="number" marginLeft="10px" />
    </HorizontalLayout>
    <Button>Create</Button>
  </VerticalLayout>
);

export default CreateCompany;
