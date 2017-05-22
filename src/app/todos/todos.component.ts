import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;
  @Output() toggle = new EventEmitter<any>();
}
