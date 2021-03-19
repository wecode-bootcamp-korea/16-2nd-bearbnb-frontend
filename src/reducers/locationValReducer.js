export const locationValReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOCATION_SEARCH_VAL':
      return (state = action.payload);
    default:
      return state;
  }
};
