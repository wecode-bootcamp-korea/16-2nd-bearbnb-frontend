const initState = {
  adult: 0,
  child: 0,
  kid: 0,
};

export const guestQtyReducer = (state = initState, action) => {
  switch (action.type) {
    case 'KID_QTY':
      return {
        ...state,
        adult: state.adult + 1,
        kid: state.kid + 1,
      };
    case 'PLUS_GUEST':
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    case 'MINUS_GUEST':
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };
    default:
      return state;
  }
};
