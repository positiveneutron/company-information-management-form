import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout,
  Divider
} from "../../components/index";

const Company = ({ key, data }) => {
  const deleteCompanyDispatch = useDispatch();

  return (
    <VerticalLayout
      paddingTop="10px"
      paddingRight="20px"
      paddingLeft="20px"
      paddingBottom="10px"
      border
      borderRadius="10px"
      margin="10px"
      customWidth="230px"
      key={key}
    >
      <HorizontalLayout justifyContent="space-between" customWidth="230px">
        <Link to={`/offices/${data.id}`}>
          <TitleLabel clicked>{data.name}</TitleLabel>
        </Link>
        <TitleLabel
          clicked
          bold
          onClick={() =>
            window.confirm("Are you sure you wish to delete this company?") &&
            deleteCompanyDispatch({
              type: "DELETE_COMPANY",
              companyId: data.id
            })
          }
        >
          X
        </TitleLabel>
      </HorizontalLayout>
      <Divider
        horizontal
        customWidth="220px"
        customHeight="1px"
        marginRight="0px"
        marginLeft="0px"
      />
      <TitleLabel bold fontSize="16px">
        Address:
      </TitleLabel>
      <TitleLabel fontSize="16px">{data.address}</TitleLabel>
      <TitleLabel bold fontSize="16px">
        Revenue:
      </TitleLabel>
      <TitleLabel fontSize="16px">{data.revenue}</TitleLabel>
      <TitleLabel bold fontSize="16px">
        Phone No:
      </TitleLabel>
      <TitleLabel fontSize="16px">{data.phoneNumber}</TitleLabel>
    </VerticalLayout>
  );
};

export default Company;
