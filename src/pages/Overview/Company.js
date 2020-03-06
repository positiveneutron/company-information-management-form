import React from "react";
import { Link } from "react-router-dom";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout,
  Divider
} from "../../components/index";

const Company = () => (
  <VerticalLayout
    paddingTop="10px"
    paddingRight="20px"
    paddingLeft="20px"
    paddingBottom="10px"
    border
    borderRadius="10px"
    margin="10px"
    customWidth="230px"
  >
    <HorizontalLayout justifyContent="space-between" customWidth="230px">
      <Link to={"/offices"}>
        <TitleLabel clicked>Google</TitleLabel>
      </Link>
      <TitleLabel clicked bold>
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
    <TitleLabel fontSize="16px">Amphitheatre</TitleLabel>
    <TitleLabel bold fontSize="16px">
      Revenue:
    </TitleLabel>
    <TitleLabel fontSize="16px">12345</TitleLabel>
    <TitleLabel bold fontSize="16px">
      Phone No:
    </TitleLabel>
    <TitleLabel fontSize="16px">(190) 132323232</TitleLabel>
  </VerticalLayout>
);

export default Company;