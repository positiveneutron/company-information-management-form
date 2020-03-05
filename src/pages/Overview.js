import React from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  FormSelect,
  SubmitButton,
  Divider
} from "../components/index";

const OverviewPage = props => (
  <HorizontalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
    margin="30px"
    border
    borderRadius="15px"
  >
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
      <SubmitButton>Create</SubmitButton>
    </VerticalLayout>
    <Divider vertical />
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
  </HorizontalLayout>
);

export default OverviewPage;
