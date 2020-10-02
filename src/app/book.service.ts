import { Injectable } from '@angular/core';
import {IBook} from "./ibook";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  getAllBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(API_URL+ `/books`)
  }
  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(API_URL + `/books/${id}`);
  }
  updateBook(id: number, book: IBook): Observable<IBook> {
    return this.http.put<IBook>(API_URL + `/books/${id}`, book);
  }
  createBook(book: IBook): Observable<IBook>{
    return this.http.post<IBook>(API_URL+"/books", book)
  }
  deleteBook(id: number): Observable<IBook> {
    return  this.http.delete<IBook>(API_URL + `/books/${id}`)
  }

}
