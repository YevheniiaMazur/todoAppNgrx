import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { todos, visibilityFilter } from './todos/todos.reducer';
import { TodosService } from './todos/todos.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos/todos.effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterComponent } from './filter/filter.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'todos', component: TodosPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
    FilterComponent,
    TodosPageComponent,
    HomePageComponent
  ],
  imports: [
    StoreModule.provideStore({todos, visibilityFilter}),
    EffectsModule.run(TodosEffects),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
