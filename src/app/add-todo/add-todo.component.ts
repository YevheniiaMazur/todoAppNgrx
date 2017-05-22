import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  control: FormControl = new FormControl('');
  @Output() add = new EventEmitter();

  @Input()
  public set reset(value: boolean) {
    value && this.control.reset();
  }
}

