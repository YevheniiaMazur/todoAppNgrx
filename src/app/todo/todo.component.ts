import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
    <p>{{todo.title}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo;
}
