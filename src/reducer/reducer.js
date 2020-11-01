export const initialState = {
  user: null,
  operations: [],
  selectedCoin: "LTC",
  username: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_OPERATIONS: "SET_OPERATIONS",
  ADD_OPERATION: "ADD_OPERATION",
  SET_SELECTED_COIN: "SET_SELECTED_COIN",
  SET_USERNAME_FOR_CONFIRMATION: "SET_USERNAME_FOR_CONFIRMATION",
  RESET_STATE_LOGOUT: "RESET_STATE_LOGOUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_OPERATIONS":
      return { ...state, operations: action.operation };
    case "ADD_OPERATION":
      return { ...state, operations: [...state.operations, action.operation] };
    case "SET_SELECTED_COIN":
      return {
        ...state,
        selectedCoin: action.selectedCoin,
      };
    case "SET_USERNAME_FOR_CONFIRMATION":
      return {
        ...state,
        username: action.username,
      };
    case "RESET_STATE_LOGOUT":
      return {
        state: action.state,
      };

    default:
      return state;
  }
};

export default reducer;
