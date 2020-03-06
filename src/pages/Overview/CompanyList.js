import React from "react";
import { useSelector } from "react-redux";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout
} from "../../components/index";
import Company from "./Company";

const CompanyList = () => {
  const companies = useSelector(state => state.companies);

  return (
    <VerticalLayout
      paddingTop="10px"
      paddingRight="10px"
      paddingLeft="10px"
      paddingBottom="10px"
      margin="30px"
    >
      <TitleLabel fontSize="30px">Companies</TitleLabel>
      <HorizontalLayout flexWrap="wrap" customWidth="600px">
        {companies.length > 0 ? (
          [...Array(3).keys()].map(index => <Company key={index} />)
        ) : (
          <TitleLabel>there is no companies created yet</TitleLabel>
        )}
      </HorizontalLayout>
    </VerticalLayout>
  );
};

export default CompanyList;
