import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'api/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError('getTodos', []))
      );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url)
      .pipe(
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      );
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;   // need to revise later
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions).pipe(
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  searchTodos(term): Observable<Todo[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Todo[]>(`api/todos/?title=${term}`).pipe(
      catchError(this.handleError<Todo[]>('searchTodos'))
    );
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log (message: string) {
    this.messageService.add('TodoService' + message);
  }
}
