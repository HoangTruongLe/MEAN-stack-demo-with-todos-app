import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    constructor(private _http:Http){
        
    }
    
    getTodos(){
        return this._http.get('/api/v1/todos')
            .map(res => res.json());
    }

    createTodo(todo){
      var _header =new Headers();
      _header.append('Content-Type','application/json');
      console.log(todo);
      return this._http.post('api/v1/todos',todo,{herder:_header})
      .map(res=>res.json());
    }

    updateTodo(todo)
    {
      var _header =new Headers();
      _header.append('Content-Type','application/json');
      return this._http.put('api/v1/todos/'+todo._id,todo,{herder:_header})
      .map(res=>res.json());
    }

    deleteTodo(todo){
      return this._http.delete('api/v1/todos/'+todo._id)
      .map(res=>res.json());
    }

}