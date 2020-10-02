import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IBook} from "../ibook";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  book: IBook = null;
  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    let id = (+this.activeRoute.snapshot.params['id']);
    this.getBookById(id);
    this.bookForm = this.formBuilder.group({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    });
  }
  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe(pr => this.book = pr);
  }
  editBook(): void {
    const book = this.bookForm.value;
    this.bookService.updateBook(this.book.id, book).subscribe(()=>{
      this.router.navigate(['books']);
    });
  }
}
