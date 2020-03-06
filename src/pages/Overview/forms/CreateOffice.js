import React, { useState } from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  TitleLabel,
  FormInputLabel,
  FormInput,
  FormSelect,
  Button
} from "../../../components/index";

const CreateOffice = () => {
  const [officeName, setOfficeName] = useState("");
  const [officeLatitude, setOfficeLatitude] = useState("");
  const [officeLongitude, setOfficeLongitude] = useState("");
  const [officeStartDate, setOfficeStartDate] = useState("");
  const [company, setCompany] = useState("");
  const [
    showSubmitButtonValidationMessage,
    isShowSubmitButtonValidationMessage
  ] = useState(false);

  const submitValidation = () => {
    if (
      officeName === "" ||
      officeLatitude === "" ||
      officeLongitude === "" ||
      officeStartDate === "" ||
      company === ""
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
        <ul>
          {officeName === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Office Name field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {officeLatitude === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Office Latitude field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {officeLongitude === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Office Longitude field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {officeStartDate === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Office Start Date field must be filled to Submit
              </TitleLabel>
            </li>
          )}
          {company === "" && (
            <li>
              <TitleLabel fontSize="17px">
                Company field must be choosed to Submit
              </TitleLabel>
            </li>
          )}
        </ul>
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
      <TitleLabel>Create Office</TitleLabel>
      <FormInputLabel>Name:</FormInputLabel>
      <FormInput
        type="text"
        placeholder="name"
        value={officeName}
        onChange={e => setOfficeName(e.target.value)}
      />
      <FormInputLabel>Location:</FormInputLabel>
      <HorizontalLayout>
        <FormInput
          type="number"
          placeholder="latitude"
          value={officeLatitude}
          onChange={e => setOfficeLatitude(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="longitude"
          marginLeft="10px"
          value={officeLongitude}
          onChange={e => setOfficeLongitude(e.target.value)}
        />
      </HorizontalLayout>
      <FormInputLabel>Office Start Date:</FormInputLabel>
      <FormInput
        type="date"
        placeholder="date"
        value={officeStartDate}
        onChange={e => setOfficeStartDate(e.target.value)}
      />
      <FormInputLabel place>Company</FormInputLabel>
      <FormSelect value={company} onChange={e => setCompany(e.target.value)}>
        <option>select company</option>
      </FormSelect>
      <Button onClick={() => submitValidation()}>Create</Button>
      {showSubmitButtonValidationMessage && <SubmitButtonValidationMessage />}
    </VerticalLayout>
  );
};

export default CreateOffice;
