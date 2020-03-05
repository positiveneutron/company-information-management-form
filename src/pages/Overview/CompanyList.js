import React from "react";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout
} from "../../components/index";
import Company from "./Company";

const CompanyList = () => (
  <VerticalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
    margin="30px"
  >
    <TitleLabel fontSize="30px">Companies</TitleLabel>
    <HorizontalLayout flexWrap="wrap" customWidth="600px">
      {[...Array(2).keys()].map(() => (
        <Company />
      ))}
      <Company />
    </HorizontalLayout>
  </VerticalLayout>
);

export default CompanyList;
