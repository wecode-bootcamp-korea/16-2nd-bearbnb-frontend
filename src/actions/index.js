export const locationSearchValAction = val => {
  return {
    type: 'LOCATION_SEARCH_VAL',
    payload: val,
  };
};

export const setKidQtyAction = () => {
  return {
    type: 'KID_QTY',
  };
};

export const plusGuestQtyAction = selected => {
  return {
    type: 'PLUS_GUEST',
    payload: selected,
  };
};

export const minusGuestQtyAction = selected => {
  return {
    type: 'MINUS_GUEST',
    payload: selected,
  };
};
