import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const companies = useSelector(state => state.companies);
  const offices = useSelector(state => state.offices);
  const createOfficeDispatch = useDispatch();

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
      createOfficeDispatch({
        type: "CREATE_OFFICE",
        newOffice: {
          id: offices.length + 1,
          companyId: parseInt(company),
          name: officeName,
          latitude: officeLongitude,
          longitude: officeLongitude,
          startDate: officeStartDate
        }
      });
      setOfficeName("");
      setOfficeLatitude("");
      setOfficeLongitude("");
      setOfficeStartDate("");
      setCompany("");
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
                Company field must be choosen to Submit
              </TitleLabel>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  };

  const officeLatitudeValidation = e => {
    if (parseFloat(e.target.value) > 0) {
      setOfficeLatitude(parseFloat(e.target.value));
    } else {
      e.target.value = null;
      setOfficeLatitude(null);
    }
  };

  const officeLongitudeValidation = e => {
    if (parseFloat(e.target.value) > 0) {
      setOfficeLongitude(parseFloat(e.target.value));
    } else {
      e.target.value = null;
      setOfficeLongitude(null);
    }
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
          onChange={e => officeLatitudeValidation(e)}
        />
        <FormInput
          type="number"
          placeholder="longitude"
          marginLeft="10px"
          value={officeLongitude}
          onChange={e => officeLongitudeValidation(e)}
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
        <option selected="true" disabled="disabled" value="">
          select company
        </option>
        {companies.map((company, index) => (
          <option key={index} value={company.id}>
            {company.name}
          </option>
        ))}
      </FormSelect>
      <Button onClick={() => submitValidation()}>Create</Button>
      {showSubmitButtonValidationMessage && <SubmitButtonValidationMessage />}
    </VerticalLayout>
  );
};

export default CreateOffice;
