import {
  ADD_NEW_USER,
  HANDLE_CHANGE_SIGNUP,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGGED_IN,
  LOG_OUT,
  HANDLE_CHANGE_LOGIN,
  NEW_TASK,
  HANDLE_CHANGE_NEW_TASK,
  NEW_TASK_SUCCESS,
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  HANDLE_CHANGE_NOTE_DESCRIPTION,
  NEW_NOTE_DESCRIPTION,
  NEW_NOTE_DESCRIPTION_SUCCESS,
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
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
  isLoggedIn: false,
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
      return state;

    case LOGIN:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOG_OUT:
      return initialState;

    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
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
      return state;

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        allTasks: action.payload,
      };

    case DELETE_TASK:
      return state;

    case NEW_NOTE_DESCRIPTION:
      return {
        ...state,
        newNoteDescription: {
          todo_list: "",
        },
      };

    case NEW_NOTE_DESCRIPTION_SUCCESS:
      return {
        ...state,
        allUserNotes: [...state.allUserNotes, action.payload],
      };

    case FETCH_NOTES:
      return state;

    case FETCH_NOTES_SUCCESS:
      const newNotes = action.payload.filter(
        (newNote) => !state.allUserNotes.some((note) => note.id === newNote.id)
      );

      return {
        ...state,
        allUserNotes: [...state.allUserNotes, ...newNotes],
      };
    case DELETE_TASK_SUCCESS:
      const deletedTaskId = action.payload.taskId;
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== deletedTaskId),
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

    case HANDLE_CHANGE_NOTE_DESCRIPTION:
      return {
        ...state,
        newNoteDescription: action.payload,
      };

    default:
      return state;
  }
};
