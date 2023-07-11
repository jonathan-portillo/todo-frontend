import {
  ADD_NEW_USER,
  HANDLE_CHANGE_SIGNUP,
  LOGIN,
  HANDLE_CHANGE_LOGIN,
  NEW_TASK,
  HANDLE_CHANGE_NEW_TASK,
  NEW_TASK_SUCCESS,
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
} from "../actions/todoActions";

const initialState = {
  signUpForm: {
    username: "",
    password: "",
  },
  loginForm: {
    username: "",
    password: "",
  },
  newTask: {
    todo_title: "",
  },
  allTasks: [],
  newNoteDescription: {
    todo_list: "",
  },
  allUserNotes: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
      };
    case NEW_TASK: {
      return {
        ...state,
        newTask: {
          todo_title: "",
        },
      };
    }
    case NEW_TASK_SUCCESS:
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
      };
    case FETCH_TASKS:
      return {
        ...state,
      };
    case DELETE_TASK:
      return {
        ...state,
      };
    case DELETE_TASK_SUCCESS:
      const deletedTaskId = action.payload.taskId;
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== deletedTaskId),
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        allTasks: action.payload,
      };
    case HANDLE_CHANGE_SIGNUP:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case HANDLE_CHANGE_LOGIN:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case HANDLE_CHANGE_NEW_TASK:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    default:
      return state;
  }
};
