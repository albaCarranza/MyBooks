import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  public miBook: Book[];
  public searchTerm: string;


  constructor(public booksService: BooksService, private toastr: ToastrService) {
    this.booksService.getAll().subscribe((data: object) => {
      this.miBook = data as Book[]
    })
  }

  public buscarLibros(id: HTMLInputElement) {
    this.booksService.getOne(parseInt(id.value)).subscribe((book: Book) => {

      if (book) {
        this.miBook = [book]
      }
      else {
        this.toastr.error('¡Ups! El libro con el ID especificado no existe');
        this.booksService.getAll().subscribe((data: object) => {
          this.miBook = data as Book[]
        })
      }
    })
  }

  borrar(noBook: Book) {
    this.booksService.delete(noBook.id_book).subscribe((Respuesta : Respuesta) => {
      this.miBook = this.miBook.filter(book => book.id_book !== noBook.id_book)
      console.log(Respuesta);
    
    
      this.toastr.warning('libro a la puta');

    } )
  }
}







