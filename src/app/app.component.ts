import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_TODO_SUCCESS, getTodos, addTodo } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  template: `
    <todos [todos]='todos | async'></todos>

    <add-todo (add)="addTodo($event)" [reset]="addTodoSuccess$ | async"></add-todo>
  `
})
export class AppComponent {
  todos: Observable<any>;
  addTodoSuccess$: Observable<any>;

  constructor(private store: Store<any>, private todosEffects: TodosEffects) {
    this.store.dispatch(getTodos());
    this.todos = store.select('todos');
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(({type}) => type === ADD_TODO_SUCCESS);
  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo));
  }
}
