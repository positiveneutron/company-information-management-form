const initialState = {
  companies: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return { companies: state.companies };
    case "CREATE_COMPANY":
      state.companies.push(action.newCompany);
      console.log("current companies", state.companies);
      return { companies: state.companies };
    default:
      return state;
  }
};
