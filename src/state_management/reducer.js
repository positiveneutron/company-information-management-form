const initialState = {
  companies: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return { companies: state.companies };
    case "CREATE_COMPANY":
      return { ...state, companies: state.companies.concat(action.newCompany) };
    default:
      return state;
  }
};
