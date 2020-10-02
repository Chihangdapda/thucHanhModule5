import { Component, OnInit } from '@angular/core';
import {IBook} from "../ibook";
import {BookService} from "../book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];
  constructor(private bookService: BookService) {
   this.getListBook();
  }

  ngOnInit(): void {

  }
  getListBook(): IBook[] {
    this.bookService.getAllBook().subscribe(p => this.books = p);
    return this.books;
  }

}
