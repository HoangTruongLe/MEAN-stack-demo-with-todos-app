import { Component } from '@angular/core';
import {TodoService} from './service/todos.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TodoService]
})

export class AppComponent { }