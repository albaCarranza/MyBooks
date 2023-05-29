import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public bookService: BooksService)
  {
    
  }

  public agregar(newTitle: HTMLInputElement, newType: HTMLInputElement, newAuthor: HTMLInputElement, newPrice: HTMLInputElement, newPhoto: HTMLInputElement, newid_book: HTMLInputElement) {
    console.log(this.bookService);
    const newBook = new Book(newTitle.value, newType.value, newAuthor.value, parseInt(newPrice.value), newPhoto.value, parseInt(newid_book.value));
    this.bookService.add(newBook);
    console.log(this.bookService);
    alert ('¡Tu libro se ha añadido correctamente!')
  }
}

