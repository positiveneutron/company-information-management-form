import React from "react";
import { Link } from "react-router-dom";
import {
  TitleLabel,
  VerticalLayout,
  Divider,
  Button,
  HorizontalLayout
} from "../../components/index";
import OfficeList from "./OfficeList";

const index = props => (
  <VerticalLayout border borderRadius="15px" margin="30px">
    <VerticalLayout
      paddingTop="15px"
      paddingLeft="13px"
      paddingRight="13px"
      paddingBottom="17px"
    >
      <TitleLabel>Google</TitleLabel>
      <Divider horizontal customWidth="530px" customHeight="1px" />
      <TitleLabel bold fontSize="16px">
        Address:
      </TitleLabel>
      <TitleLabel fontSize="16px">Amphitheatre</TitleLabel>
      <TitleLabel bold fontSize="16px">
        Revenue:
      </TitleLabel>
      <TitleLabel fontSize="16px">123456</TitleLabel>
      <TitleLabel bold fontSize="16px">
        Phone No:
      </TitleLabel>
      <TitleLabel fontSize="16px">(86) 232-123434-2345</TitleLabel>
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

export default index;
