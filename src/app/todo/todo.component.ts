import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {TodoVo} from '../domain/todo.vo';
import {PageVo} from '../domain/page.vo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoVo[];
  newTodo = new TodoVo();
  tempTodoMap = new Map<number, TodoVo>();  // GENERIC TYPE을 선언해주자 TYPE SCRIPT답게 말이다


  page: PageVo;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.page = new PageVo(1, 5, 0);
    this.getTodoList();
  }

  pageChanged(e: any) {
    // pageIndex가 넘어온다.
    // this.page.pageIndex = e; // MARK: 양방향이라 값을 정할 필요도 없지.
    this.getTodoList();
  }

  getTodoList() {
    const start_index = (this.page.pageIndex - 1) * this.page.pageSize;
    this.heroService.getPagedTodoList(start_index, this.page.pageSize).subscribe(body => {
      this.todoList = body.data;
      this.page.totalCount = body.total;
    });
  }

  addTodo() {
    this.heroService.addTodo(this.newTodo).subscribe(body => {
      this.todoList.unshift(body);
    });
  }

  save(todo: TodoVo) {
    const tempTodo = {...todo};
    this.tempTodoMap.set(todo.todo_id, tempTodo);
    this.heroService.modifyTodo(todo).subscribe(body => {
      Object.assign(todo, body, {isEdited: false});
    });
  }

  restore(todo: TodoVo) {
    const tempTodo = this.tempTodoMap.get(todo.todo_id);

    // 1. 방법
    todo.todo = tempTodo.todo;
    todo.isEdited = false;

    // 2. 방법
    // Object.assign(todo, tempTodo, {isEdited: false});
    // todo = {...tempTodo, isEdited: false};  <--메모리를 바꾸는 행위이므로 작동이 안된다.
  }

  modify(todo: TodoVo) {
    const tempTodo = {...todo}; // new TodoVo();
    // Object.assign(tempTodo, todo);
    this.tempTodoMap.set(todo.todo_id, tempTodo);
    todo.isEdited = true;
  }

  remove(todo: TodoVo) {
    if (!confirm('삭제하시겠읍니까?')) return;
    this.heroService.removeTodo(todo).subscribe(body => {
      if (body.value === 'success' && !body.result) {
        this.todoList.splice(this.todoList.findIndex(t => t.todo_id === todo.todo_id), 1);
      }
    });
  }

}
