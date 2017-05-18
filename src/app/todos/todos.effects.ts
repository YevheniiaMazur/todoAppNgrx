import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TodosService } from './todos.service';
import {
  ADD_TODO, ADD_TODO_ERROR, ADD_TODO_SUCCESS, GET_TODOS, GET_TODOS_ERROR,
  GET_TODOS_SUCCESS
} from './todos.reducer';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosEffects {
  constructor(private action$: Actions,
              private todosService: TodosService) {
  }

  @Effect() getTodo$ = this.action$
    .ofType(GET_TODOS)
    .switchMap(action => this.todosService.getTodos()
      .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
      .catch(() => Observable.of({type: GET_TODOS_ERROR})));

  @Effect() addTodo$ = this.action$
    .ofType(ADD_TODO)
    .switchMap(action => {
      return this.todosService.addTodo(action.payload.title)
        .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
        .catch(() => Observable.of({type: ADD_TODO_ERROR}));
    });
}
