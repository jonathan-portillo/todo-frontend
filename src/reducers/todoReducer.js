import { ADD_NEW_USER, HANDLE_CHANGE_SIGNUP } from "../actions/todoActions";

const initialState = {
  signUpForm: {
    username: "",
    password: "",
  },
  loginForm: {
    username: "",
    password: "",
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
      };
    case HANDLE_CHANGE_SIGNUP:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    default:
      return state;
  }
};
