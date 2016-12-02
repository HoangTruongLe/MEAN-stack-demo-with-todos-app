import { Component, OnInit} from '@angular/core';
import {TodoService} from '../service/todos.service';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
  todos: any[];
  private clickedId = 0;
  constructor(private _todoService: TodoService) {

  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }
  createTodo(todoText) {
    if (todoText.value != '') {
      var todo = {
        text: todoText.value,
        iscompleted: false
      }
      var result;
      //result = this._todoService.createTodo(todo);
      // console.log(JSON.stringify(todo));
      result = this._todoService.createTodo(todo).subscribe(res => {
        this.todos.push(todo);
        todoText.value = '';
      })
    }

  }

  updateTodoComplete(todo) {

    todo.iscompleted = !todo.iscompleted;
    var result = this._todoService.updateTodo(todo).subscribe(res => {
      console.log(res);
    })
  }

  updateTodo(todo) {
    var result = this._todoService.updateTodo(todo).subscribe(res => {
      this.clickedId = 0
    })
    
  }

  isEditing(id, clickedId): boolean {
    if (id == clickedId)
      return false;
    else return true;
  }
  deleteTodo(todo) {
    var result = this._todoService.deleteTodo(todo).subscribe(res => {
      this.getTodos();
    })
  }
}