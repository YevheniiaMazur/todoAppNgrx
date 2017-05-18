import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/timer';

@Injectable()
export class TodosService {
  getTodos() {
    const todos = [{id: 1, title: 'Learn ngrx/store', completed: false},
      {id: 2, title: 'Learn ngrx/effects', completed: false}];

    return Observable.timer(1000).mapTo(todos);
  }

  addTodo(title) {
    return Observable.timer(500)
      .mapTo({id: Math.random(), title, completed: false});
  }
}
