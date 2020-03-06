import React from "react";
import { useDispatch } from "react-redux";
import {
  TitleLabel,
  VerticalLayout,
  HorizontalLayout,
  Divider
} from "../../components/index";

const Office = ({ key, data }) => {
  const deleteOfficeDispatch = useDispatch();

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
        <TitleLabel clicked>{data.name}</TitleLabel>

        <TitleLabel
          clicked
          bold
          onClick={() =>
            window.confirm("Are you sure you wish to delete this office?") &&
            deleteOfficeDispatch({
              type: "DELETE_OFFICE",
              officeId: data.id
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
        Location:
      </TitleLabel>
      <TitleLabel fontSize="16px">Lat - {data.latitude}</TitleLabel>
      <TitleLabel fontSize="16px">Long - {data.longitude}</TitleLabel>
      <TitleLabel bold fontSize="16px">
        Office Start Date:
      </TitleLabel>
      <TitleLabel fontSize="16px">{data.startDate}</TitleLabel>
    </VerticalLayout>
  );
};

export default Office;
