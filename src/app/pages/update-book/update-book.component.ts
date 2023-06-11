import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  constructor(public bookService: BooksService, private toastr: ToastrService) {}

  modifyBook(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement, id_book: HTMLInputElement) {

    const book = new Book(title.value, type.value, author.value, parseInt(price.value), photo.value, parseInt(id_book.value));

    this.bookService.edit(book).subscribe((Respuesta: Respuesta) => {
      if (!Respuesta.error) {
        this.toastr.success('¡Ups! El libro con el ID especificado no existe');
      }
      else {
        this.toastr.error('Oh oh... Parece que tu libro no se ha podido editar');
      }
    })
  }
}

