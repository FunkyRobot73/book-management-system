import { Component, BootstrapOptions } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-management-system';
}
