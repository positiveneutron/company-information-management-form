import React from "react";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout
} from "../../components/index";
import Office from "./Office";

const OfficeList = () => (
  <VerticalLayout
    paddingTop="10px"
    paddingRight="10px"
    paddingLeft="10px"
    paddingBottom="10px"
    margin="30px"
  >
    <TitleLabel fontSize="30px">Offices</TitleLabel>
    <HorizontalLayout flexWrap="wrap" customWidth="600px">
      {[...Array(4).keys()].map(() => (
        <Office />
      ))}
    </HorizontalLayout>
  </VerticalLayout>
);

export default OfficeList;
