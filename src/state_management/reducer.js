const initialState = {
  companies: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return { companies: state.companies };
    default:
      return state;
  }
};
