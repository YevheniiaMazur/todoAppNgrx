export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_ERROR';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const initialState = {
  data: [],
  pending: false,
  error: null
};

export function getTodos() {
  return {
    type: GET_TODOS
  };
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      title,
      completed: false
    }
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: todo
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  };
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function todos(state = initialState, {type, payload}) {
  switch (type) {
    case GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null, data: []});
    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false});
    case GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: 'Error'});
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo => {
          if (todo.id === payload.id) {
            return Object.assign({}, todo, {completed: !todo.completed})
          }

          return todo;
        })
      })
    case ADD_TODO_SUCCESS:
      return Object.assign({}, state, {data: [...state.data, payload]});
    default:
      return state;
  }
}
