import React from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  FormSelect,
  SubmitButton
} from "../../../components/index";

const CreateOffice = () => (
  <VerticalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
  >
    <TitleLabel>Create Office</TitleLabel>
    <FormInputLabel>Name:</FormInputLabel>
    <FormInput type="text" placeholder="name" />
    <FormInputLabel>Location:</FormInputLabel>
    <HorizontalLayout>
      <FormInput type="number" placeholder="latitude" />
      <FormInput type="number" placeholder="longitude" marginLeft="10px" />
    </HorizontalLayout>
    <FormInputLabel>Office Start Date:</FormInputLabel>
    <FormInput type="date" placeholder="date" />
    <FormInputLabel place>Company</FormInputLabel>
    <FormSelect>
      <option>select company</option>
    </FormSelect>
    <SubmitButton>Create</SubmitButton>
  </VerticalLayout>
);

export default CreateOffice;
