import React from "react";
import { useSelector } from "react-redux";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout
} from "../../components/index";
import Office from "./Office";

const OfficeList = ({ companyId }) => {
  const offices = useSelector(state => state.offices);

  return (
    <VerticalLayout
      paddingTop="10px"
      paddingRight="10px"
      paddingLeft="10px"
      paddingBottom="10px"
      margin="30px"
    >
      <TitleLabel fontSize="30px">Offices</TitleLabel>
      <HorizontalLayout flexWrap="wrap" customWidth="600px">
        {offices
          .filter(office => office.companyId === parseInt(companyId))
          .map((office, index) => (
            <Office key={index} data={office} />
          ))}
      </HorizontalLayout>
    </VerticalLayout>
  );
};

export default OfficeList;
