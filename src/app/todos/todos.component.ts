import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'todos',
  template: `
    <p *ngIf="todos.pending">Loading...</p>

    <todo [todo]="todo"
          *ngFor="let todo of todos.data">
    </todo>

    <p *ngIf="todos.error">{{todos.error}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;
}
