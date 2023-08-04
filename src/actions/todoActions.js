import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";

export const HANDLE_CHANGE_SIGNUP = "HANDLE_CHANGE_SIGNUP";
export const HANDLE_CHANGE_LOGIN = "HANDLE_CHANGE_LOGIN";
export const HANDLE_CHANGE_NEW_TASK = "HANDLE_CHANGE_NEW_TASK";
export const HANDLE_CHANGE_NOTE_DESCRIPTION = "HANDLE_CHANGE_NOTE_DESCRIPTION";

export const SET_LOGGED_IN = "SET_LOGGED_IN";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOG_OUT = "LOG_OUT";

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

export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAIL = "FETCH_NOTES_FAIL";

export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAIL = "UPDATE_TASK_FAIL";

export const UPDATE_NOTE = "UPDATE_NOTE";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAIL = "UPDATE_NOTE_FAUL";

export const SET_EDIT = "SET_EDIT";
export const SET_EDITED_TITLE = "SET_EDITED_TITLE";

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

//APP CHECKS IF LOGGED IN EVEN ON REFRESH

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: SET_LOGGED_IN,
    payload: isLoggedIn,
  };
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  localStorage.removeItem("token");
  localStorage.removeItem("id");
};

//Create a new task

export const createNewTask = (task) => (dispatch) => {
  dispatch({ type: NEW_TASK });
  axiosWithAuth()
    .post(`/title/user/${localStorage.getItem("id")}`, task)
    .then((res) => {
      dispatch({
        type: NEW_TASK_SUCCESS,
        payload: { ...res.data },
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

//UPDATE TASK TITLE w/ TASK TITLE ID

export const updateTask = (id, task) => (dispatch) => {
  dispatch({ type: UPDATE_TASK });
  axiosWithAuth()
    .put(`/title/${id}`, task)
    .then((res) => {
      dispatch({
        type: UPDATE_TASK_SUCCESS,
        payload: { id, updatedTask: task.todo_title }, // Send the updated task title
      });
      console.log("Title has been updated", res.data);
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_TASK_FAIL,
        payload: "Well you're stuck with the title you made, try again",
      });
    });
};

//DELETE A TASK

export const deleteTask = (titleId) => (dispatch) => {
  dispatch({ type: DELETE_TASK });
  axiosWithAuth()
    .delete(`/title/${titleId}`)
    .then((res) => {
      dispatch({ type: DELETE_TASK_SUCCESS, payload: { taskId: titleId } });
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

//CREATE A NOTE ATTACHED TO TASK
export const createNewNote = (id, notes) => (dispatch) => {
  dispatch({ type: NEW_NOTE_DESCRIPTION });
  axiosWithAuth()
    .post(`/todoList/${id}/title`, notes)
    .then((res) => {
      dispatch({
        type: NEW_NOTE_DESCRIPTION_SUCCESS,
        payload: res.data,
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: NEW_NOTE_DESCRIPTION_FAIL,
        payload: "Couldnt create the note try again",
      });
    });
};

//UPDATE NOTE USING NOTE_ID

export const updateNotes = (id, notes) => (dispatch) => {
  dispatch({ type: UPDATE_NOTE });
  axiosWithAuth()
    .put(`/todoList/${id}`, notes)
    .then((res) => {
      dispatch({
        type: UPDATE_NOTE_SUCCESS,
        payload: res.DELETE_TASK_FAIL,
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_NOTE_FAIL,
        payload:
          "Couldn't update note, you did something wronge, get it together",
      });
    });
};

//RETIEVE THE NOTES FROM THE TASK
export const getNotes = (id, notes) => (dispatch) => {
  dispatch({ type: FETCH_NOTES });
  axiosWithAuth()
    .get(`/todoList/${id}/title`, notes)
    .then((res) => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_NOTES_FAIL,
        payload: "OOOOOOOOOOOFFFF",
      });
    });
};

//TO SHOW THAT OUR COMPONENT IS BEING EDITED,
export const setEditing = (taskId, isEditing) => {
  return {
    type: SET_EDIT,
    payload: { taskId, isEditing },
  };
};

//TO EDIT OUR TITLE
export const editTitle = (title) => {
  return {
    type: SET_EDITED_TITLE,
    payload: title,
  };
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

export const handle_change_note_description = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_NOTE_DESCRIPTION, payload: e });
};
