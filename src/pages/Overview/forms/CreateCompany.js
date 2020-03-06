import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  Button
} from "../../../components/index";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [revenue, setRevenue] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [
    showSubmitButtonValidationMessage,
    isShowSubmitButtonValidationMessage
  ] = useState(false);
  const createCompanyDispatch = useDispatch();

  const submitValidation = () => {
    if (
      companyName === "" ||
      address === "" ||
      revenue === "" ||
      phoneCode === "" ||
      phoneNumber === ""
    ) {
      return isShowSubmitButtonValidationMessage(true);
    } else {
      createCompanyDispatch({
        type: "CREATE_COMPANY",
        newCompany: {
          name: companyName,
          address: address,
          revenue: revenue,
          phoneNumber: `(${phoneCode}) ${phoneNumber}`
        }
      });
      setCompanyName("");
      setAddress("");
      setRevenue("");
      setPhoneCode("");
      setPhoneNumber("");
      isShowSubmitButtonValidationMessage("");
    }
  };

  const SubmitButtonValidationMessage = () => {
    return (
      <React.Fragment>
        <ul>
          {companyName === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Company Name field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {address === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Address field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {revenue === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Revenue field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {phoneCode === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Phone Code field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {phoneNumber === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Phone Number field must be filled to Submit
              </TitleLabel>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  };

  const revenueValidation = e => {
    if (Math.floor(e.target.value) > 0) {
      setRevenue(Math.floor(e.target.value));
    } else {
      e.target.value = null;
      setRevenue(null);
    }
  };

  const phoneCodeValidation = e => {
    if (parseInt(e.target.value) > 0) {
      setPhoneCode(parseInt(e.target.value));
    } else {
      e.target.value = null;
      setPhoneCode(null);
    }
  };

  const phoneNumberValidation = e => {
    if (parseInt(e.target.value) > 0) {
      setPhoneNumber(parseInt(e.target.value));
    } else {
      e.target.value = null;
      setPhoneNumber(null);
    }
  }; //.

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
      <FormInputLabel>Revenue: </FormInputLabel>
      <FormInput
        type="number"
        placeholder="revenue"
        value={revenue}
        onChange={e => revenueValidation(e)}
      />
      <FormInputLabel>Phone No:</FormInputLabel>
      <HorizontalLayout>
        <FormInput
          type="number"
          placeholder="code"
          customWidth="45px"
          value={phoneCode}
          onChange={e => phoneCodeValidation(e)}
        />
        <FormInput
          type="number"
          placeholder="number"
          marginLeft="10px"
          value={phoneNumber}
          onChange={e => phoneNumberValidation(e)}
        />
      </HorizontalLayout>
      <Button onClick={() => submitValidation()}>Create</Button>
      {showSubmitButtonValidationMessage && <SubmitButtonValidationMessage />}
    </VerticalLayout>
  );
};

export default CreateCompany;
