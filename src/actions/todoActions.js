import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";

export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axiosWithAuth()
    .post("/auth/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER_SUCCESS,
        payload: res,
      });
      console.log(res);
      localStorage.setItem("id", res.data.id);
    })
    .catch((err) => {
      dispatch({
        type: ADD_NEW_USER_FAIL,
        payload: "Sign Up Failed try again!",
      });
    });
};
