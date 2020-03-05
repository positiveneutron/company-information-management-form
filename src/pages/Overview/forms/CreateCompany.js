import React, { useState } from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  Button
} from "../../../components/index";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState(null);
  const [address, setAddress] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [phoneCode, setPhoneCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [
    showSubmitButtonValidationMessage,
    isShowSubmitButtonValidationMessage
  ] = useState(false);

  const submitValidation = () => {
    if (
      companyName === null ||
      address === null ||
      revenue === null ||
      phoneCode === null ||
      phoneNumber === null
    ) {
      return isShowSubmitButtonValidationMessage(true);
    } else {
      //redux action
      return console.log("redux to send an action");
    }
  };

  const SubmitButtonValidationMessage = () => {
    return (
      <React.Fragment>
        {companyName === null && (
          <TitleLabel fontSize="17px">
            Company Name field must be filled to Submit
          </TitleLabel>
        )}
        {address === null && (
          <TitleLabel fontSize="17px">
            Address field must be filled to Submit
          </TitleLabel>
        )}
        {revenue === null && (
          <TitleLabel fontSize="17px">
            Revenue field must be filled to Submit
          </TitleLabel>
        )}
        {phoneCode === null && (
          <TitleLabel fontSize="17px">
            Phone Code field must be filled to Submit
          </TitleLabel>
        )}
        {phoneNumber === null && (
          <TitleLabel fontSize="17px">
            Phone Number field must be filled to Submit
          </TitleLabel>
        )}
      </React.Fragment>
    );
  };

  return (
    <VerticalLayout
      paddingTop="10px"
      paddingRight="10px"
      paddingLeft="10px"
      paddingBottom="10px"
    >
      <TitleLabel>Create Company</TitleLabel>
      <FormInputLabel>Name: </FormInputLabel>
      <FormInput
        type="text"
        placeholder="name"
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
      />
      <FormInputLabel>Address:</FormInputLabel>
      <FormInput
        type="text"
        placeholder="address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <FormInputLabel>Revenue:</FormInputLabel>
      <FormInput
        type="number"
        placeholder="revenue"
        value={revenue}
        onChange={e => setRevenue(e.target.value)}
      />
      <FormInputLabel>Phone No:</FormInputLabel>
      <HorizontalLayout>
        <FormInput
          type="number"
          placeholder="code"
          customWidth="45px"
          value={phoneCode}
          onChange={e => setPhoneCode(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="number"
          marginLeft="10px"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </HorizontalLayout>
      <Button onClick={() => submitValidation()}>Create</Button>
      {showSubmitButtonValidationMessage && <SubmitButtonValidationMessage />}
    </VerticalLayout>
  );
};

export default CreateCompany;
