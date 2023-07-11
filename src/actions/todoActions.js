import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";

export const HANDLE_CHANGE_SIGNUP = "HANDLE_CHANGE_SIGNUP";
export const HANDLE_CHANGE_LOGIN = "HANDLE_CHANGE_LOGIN";
export const HANDLE_CHANGE_NEW_TASK = "HANDLE_CHANGE_NEW_TASK";
export const HANDLE_CHANGE_NOTE_DESCRIPTION = "HANDLE_CHANGE_NOTE_DESCRIPTION";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const NEW_TASK = "NEW_TASK";
export const NEW_TASK_SUCCESS = "NEW_TASK_SUCCESS";
export const NEW_TASK_FAIL = "NEW_TASK_FAIL";

export const NEW_NOTE_DESCRIPTION = "NEW_NOTE_DESCRIPTION";
export const NEW_NOTE_DESCRIPTION_SUCCESS = "NEW_NOTE_DESCRIPTION_SUCCESS";
export const NEW_NOTE_DESCRIPTION_FAIL = "NEW_NOTE_DESCRIPTION_FAIL";

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAIL = "DELETE_TASK_FAIL";

export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAIL = "FETCH_TASKS_FAIL";

//SIGN UP
export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axiosWithAuth()
    .post("/auth/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      dispatch({
        type: ADD_NEW_USER_FAIL,
        payload: "Sign Up Failed try again!",
      });
    });
};

//LOGIN
export const logUserIn = (cred) => (dispatch) => {
  dispatch({ type: LOGIN });
  axiosWithAuth()
    .post("/auth/login", cred)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Credentials are wrong or do not exist",
      });
    });
};

//Create a new task

export const createNewTask = (task) => (dispatch) => {
  dispatch({ type: NEW_TASK });
  axiosWithAuth()
    .post(`/title/user/${localStorage.getItem("id")}`, task)
    .then((res) => {
      dispatch({
        type: NEW_TASK_SUCCESS,
        payload: { ...res.data, userId: localStorage.getItem("id") },
      });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: NEW_TASK_FAIL,
        payload: "Not sending title please help please",
      });
    });
};

//DELETE A TASK

export const deleteTask = (titleId) => (dispatch) => {
  dispatch({ type: DELETE_TASK });
  axiosWithAuth()
    .delete(`/title/${titleId}`)
    .then((res) => {
      dispatch({ type: DELETE_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_TASK_FAIL, payload: err.response.data });
    });
};

//GET A LIST OF USER TASKS
export const getTasks = (task) => (dispatch) => {
  dispatch({ type: FETCH_TASKS });
  axiosWithAuth()
    .get(`title/user/${localStorage.getItem("id")}`, task)
    .then((res) => {
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TASKS_FAIL,
        payload: "Why cant we seeeeeeeeeee our stuffffffffff",
      });
    });
};

export const handle_change_login = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_LOGIN, payload: e });
};

export const handle_change_signup = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_SIGNUP, payload: e });
};

export const handle_change_newtask = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_NEW_TASK, payload: e });
};
