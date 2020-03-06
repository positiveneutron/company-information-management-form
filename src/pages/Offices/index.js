import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  TitleLabel,
  VerticalLayout,
  Divider,
  Button,
  HorizontalLayout
} from "../../components/index";
import OfficeList from "./OfficeList";

const Container = () => {
  const { companyId } = useParams();
  const companies = useSelector(state => state.companies);

  const selectedCompany = companies.filter(function(company) {
    return company.id === parseInt(companyId);
  });

  return (
    <VerticalLayout border borderRadius="15px" margin="30px">
      <VerticalLayout
        paddingTop="15px"
        paddingLeft="13px"
        paddingRight="13px"
        paddingBottom="17px"
      >
        <TitleLabel>{selectedCompany[0].name}</TitleLabel>
        <Divider horizontal customWidth="530px" customHeight="1px" />
        <TitleLabel bold fontSize="16px">
          Address:
        </TitleLabel>
        <TitleLabel fontSize="16px">{selectedCompany[0].address}</TitleLabel>
        <TitleLabel bold fontSize="16px">
          Revenue:
        </TitleLabel>
        <TitleLabel fontSize="16px">{selectedCompany[0].revenue}</TitleLabel>
        <TitleLabel bold fontSize="16px">
          Phone No:
        </TitleLabel>
        <TitleLabel fontSize="16px">
          {selectedCompany[0].phoneNumber}
        </TitleLabel>
        <HorizontalLayout justifyContent="flex-end" customWidth="100%">
          <Button customWidth="140px">
            <Link to={"/"}>Back To Overview</Link>
          </Button>
        </HorizontalLayout>
      </VerticalLayout>
      <Divider horizontal customWidth="530px" customHeight="1px" />
      <OfficeList />
    </VerticalLayout>
  );
};

const index = () => <Container />;

export default index;
