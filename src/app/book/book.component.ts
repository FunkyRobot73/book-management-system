import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  newBookTitle : any = "";
  newAuthor : any = "";
  books: Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")

    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addAppointment() {
    if(this.newBookTitle.trim().length && this.newAuthor){
      let newBook: Book = {
        id:Date.now(),
        title: this.newBookTitle,
        author: this.newAuthor
      }

      this.books.push(newBook);

      this.newBookTitle = "";
      this.newAuthor = "";

      // alert(this.appointments.length);
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index: number) {
    this.books.splice(index,1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }

}
