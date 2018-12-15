import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVo} from './domain/todo.vo';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.HOST}/api/heroes`);
    // .pipe(delay(1e3));
  }

  getHero(hero_id: number): Observable<Hero> {

    return this.http.get<Hero>(`${environment.HOST}/api/hero/${hero_id}`);
  }

  getTodoList(): Observable<TodoVo[]> {
    return this.http.get<TodoVo[]>(`${environment.HOST}/api/todo`);
  }

  addTodo(todo: TodoVo): Observable<TodoVo> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<TodoVo>(`${environment.HOST}/api/todo`, todo, {headers: headers});
  }
}
