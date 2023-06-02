import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  constructor(public bookService: BooksService, private toastr: ToastrService) {}

  modifyBook(title: string, type: string, author: string, price: number, photo: string, id_book: number) {
    const book: Book = new Book(title, type, author, price, photo, id_book);
    const funciona = this.bookService.edit(book);
    if (funciona) {
      this.toastr.success('¡Ups! El libro con el ID especificado no existe');

    } 
    else{
      this.toastr.error('Oh oh... Parece que tu libro no se ha podido editar');

    }
  }
 
  }

