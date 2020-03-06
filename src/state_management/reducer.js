const initialState = {
  companies: [],
  offices: [
    {
      id: 1,
      companyId: 1,
      name: "1st office",
      latitude: 12,
      longitude: 13,
      startDate: "12/12/12"
    },
    {
      id: 2,
      companyId: 2,
      name: "xp",
      latitude: 12,
      longitude: 13,
      startDate: "12/12/12"
    }
  ]
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
    default:
      return state;
  }
};
