const initialState = {
  countriesData: []
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES_DATA':
      return {
        ...state,
        countriesData: action.payload
      };

    default:
      return state;
  }
};
