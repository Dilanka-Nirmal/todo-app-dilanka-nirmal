export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

// Action creator
export const fetchTasks = () => {
  return async (dispatch) => {
    // Fetch tasks
    dispatch({ type: FETCH_TASKS });
    try {
      const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
      const data = await response.json();
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: data });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      dispatch({ type: FETCH_TASKS_FAILURE });
    }
  };
};
