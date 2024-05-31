import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from './actions';

// Initial state
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// Tasks reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching tasks',
      };
    default:
      return state;
  }
};

export default tasksReducer;
