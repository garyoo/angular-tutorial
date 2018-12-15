import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {TodoVo} from '../domain/todo.vo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoVo[];
  newTodo = new TodoVo();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getTodoList().subscribe(body => {
      this.todoList = body;
    });
  }

  addTodo() {
    this.heroService.addTodo(this.newTodo).subscribe(body => {
      this.todoList.unshift(body);
    });
  }

}
