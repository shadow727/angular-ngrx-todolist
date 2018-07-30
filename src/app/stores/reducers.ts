import { Todo } from './model';
import * as Actions from './actions';

export function todoReducers(state: Todo[], action: Actions.Actions) {
  switch (action.type) {
    case Actions.ActionTypes.ADD_TODO_SUCCESS:
      return  [...state, action.payload] ;
    case Actions.ActionTypes.REMOVE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case Actions.ActionTypes.GET_TODOS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}

export function detailReducers(state: Todo, action: Actions.Actions) {
  switch (action.type) {
    case Actions.ActionTypes.GET_TODO_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
