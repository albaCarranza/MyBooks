import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public miBook: Book[];
  public searchTerm: string;


  constructor(public booksService: BooksService) {
    this.miBook = this.booksService.getAll()
  }

  public buscarLibros(id: HTMLInputElement){
    let encontrar = this.booksService.getOne(parseInt(id.value))
    if(encontrar){
      this.miBook = [encontrar]
    } 
    else {
    this.miBook = this.booksService.getAll()
    }
  }

  borrar(noBook: Book) {
    let borrado = this.booksService.delete(noBook.id_book)
    if (borrado) {
      this.miBook = this.booksService.getAll()
    }
  }
}







