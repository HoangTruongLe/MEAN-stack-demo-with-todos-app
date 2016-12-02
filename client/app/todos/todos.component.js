"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todos_service_1 = require('../service/todos.service');
var TodosComponent = (function () {
    function TodosComponent(_todoService) {
        this._todoService = _todoService;
        this.clickedId = 0;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this._todoService.getTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.createTodo = function (todoText) {
        var _this = this;
        if (todoText.value != '') {
            var todo = {
                text: todoText.value,
                iscompleted: false
            };
            var result;
            //result = this._todoService.createTodo(todo);
            // console.log(JSON.stringify(todo));
            result = this._todoService.createTodo(todo).subscribe(function (res) {
                _this.todos.push(todo);
                todoText.value = '';
            });
        }
    };
    TodosComponent.prototype.updateTodoComplete = function (todo) {
        todo.iscompleted = !todo.iscompleted;
        var result = this._todoService.updateTodo(todo).subscribe(function (res) {
            console.log(res);
        });
    };
    TodosComponent.prototype.updateTodo = function (todo) {
        var _this = this;
        var result = this._todoService.updateTodo(todo).subscribe(function (res) {
            _this.clickedId = 0;
        });
    };
    TodosComponent.prototype.isEditing = function (id, clickedId) {
        if (id == clickedId)
            return false;
        else
            return true;
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        var result = this._todoService.deleteTodo(todo).subscribe(function (res) {
            _this.getTodos();
        });
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todos',
            templateUrl: 'todos.component.html'
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map