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
      console.log("action.newOffice", action.newOffice);
      return { ...state, offices: state.offices.concat(action.newOffice) };
    default:
      return state;
  }
};
