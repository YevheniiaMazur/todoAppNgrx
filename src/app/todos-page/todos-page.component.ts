import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodosEffects } from '../todos/todos.effects';
import { Store } from '@ngrx/store';
import { ADD_TODO_SUCCESS, addTodo, getTodos, setVisibilityFilter, toggleTodo } from '../todos/todos.reducer';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent {

  todos$: Observable<any>;
  activeFilter$: Observable<any>;
  addTodoSuccess$: Observable<any>;

  filters = [{id: 'SHOW_ALL', title: 'ALL'}, {id: 'SHOW_COMPLETED', title: 'Completed'}, {
    id: 'SHOW_ACTIVE',
    title: 'Active'
  }]

  constructor(private store: Store<any>, private todoEffects: TodosEffects) {
    this.store.dispatch(getTodos());
    this.activeFilter$ = store.select('visibilityFilter').take(1);
    this.todos$ = store.select('todos');
    this.addTodoSuccess$ = this.todoEffects.addTodo$.filter(({type}) => type === ADD_TODO_SUCCESS);
  }

  changeFilter(filter) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(getTodos());
  }

  toggle(todo) {
    this.store.dispatch(toggleTodo(todo));
  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo));
  }

}
