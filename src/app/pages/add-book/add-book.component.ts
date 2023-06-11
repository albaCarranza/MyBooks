import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from 'src/app/models/respuesta';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public bookService: BooksService, private toastr: ToastrService){  }

  public agregar(newTitle: HTMLInputElement, newType: HTMLInputElement, newAuthor: HTMLInputElement, newPrice: HTMLInputElement, newPhoto: HTMLInputElement, newid_book: HTMLInputElement) {
    console.log(this.bookService);

    const newBook = new Book(newTitle.value, newType.value, newAuthor.value, parseInt(newPrice.value), newPhoto.value, parseInt(newid_book.value));
    this.bookService.add(newBook).subscribe((Respuesta: Respuesta) =>{
      if(!Respuesta)
      console.log(this.bookService);
      this.toastr.success('¡Tu libro se ha añadido correctamente!');
    })
  
  }
}

