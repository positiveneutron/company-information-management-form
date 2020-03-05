import React from "react";
import { Link } from "react-router-dom";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout,
  Divider
} from "../../components/index";

const Office = () => (
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
        <TitleLabel clicked>Hangzhou Binjiang Campus</TitleLabel>
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
      Location:
    </TitleLabel>
    <TitleLabel fontSize="16px">Lat - 103.12</TitleLabel>
    <TitleLabel fontSize="16px">Long - 20.44</TitleLabel>
    <TitleLabel bold fontSize="16px">
      Office Start Date:
    </TitleLabel>
    <TitleLabel fontSize="16px">6/20/1997</TitleLabel>
  </VerticalLayout>
);

export default Office;
