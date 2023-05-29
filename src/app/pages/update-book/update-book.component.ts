import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  constructor(public bookService: BooksService) {}

  modifyBook(title: string, type: string, author: string, price: number, photo: string, id_book: number) {
    const book: Book = new Book(title, type, author, price, photo, id_book);
    const funciona = this.bookService.edit(book);
    if (funciona) {
      alert('Has editado tu libro correctamente');
    } 
    else{
      alert('Oh oh... Parece que tu libro no se ha podido editar')
    }
  }
 
  }

