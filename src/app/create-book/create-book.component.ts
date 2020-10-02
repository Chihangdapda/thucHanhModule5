import { Component, OnInit } from '@angular/core';
import {IBook} from "../ibook";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    });
  }
  createBook(){
    const product = this.bookForm.value;
    this.bookService.createBook(product).subscribe(()=>{
      this.router.navigate(['books']);
    });
  }
}
