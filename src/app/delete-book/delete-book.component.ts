import {Component, OnInit} from '@angular/core';
import {IBook} from "../ibook";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: IBook;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id).subscribe(
      next => this.book = next
    );
  }
  delete() {
    this.bookService.deleteBook(this.book.id).subscribe(
      next => this.router.navigateByUrl('/books'));
    alert("Delete Book success fully!")
  }
}
