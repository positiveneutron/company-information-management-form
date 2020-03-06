const initialState = {
  companies: [],
  offices: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COMPANY":
      return { ...state, companies: state.companies.concat(action.newCompany) };
    case "DELETE_COMPANY":
      return {
        ...state,
        companies: state.companies.filter(
          company => company.id !== action.companyId
        )
      };
    case "CREATE_OFFICE":
      return { ...state, offices: state.offices.concat(action.newOffice) };
    case "DELETE_OFFICE":
      return {
        ...state,
        offices: state.offices.filter(office => office.id !== action.officeId)
      };
    default:
      return state;
  }
};
