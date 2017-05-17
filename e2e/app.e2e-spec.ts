import { TodoAppNgrxPage } from './app.po';

describe('todo-app-ngrx App', () => {
  let page: TodoAppNgrxPage;

  beforeEach(() => {
    page = new TodoAppNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
