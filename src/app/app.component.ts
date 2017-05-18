import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getTodos } from './todos/todos.reducer';

@Component({
  selector: 'app-root',
  template: `
  <todos [todos]='todos | async'></todos>
`
})
export class AppComponent {
  todos: Observable<any>;

  constructor(private store: Store<any>) {
    this.store.dispatch(getTodos());
    this.todos = store.select('todos');
  }
}
