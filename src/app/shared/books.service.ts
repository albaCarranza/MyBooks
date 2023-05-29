import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private books: Book[] = [
    new Book(
      'La Biblia de las brujas',
      'Fantasía',
      'Carla',
      45,
      'https://m.media-amazon.com/images/I/81k6uvXFArL.jpg',
      0
    ),
    new Book(
      'Anatomy for sculptors',
      'Arte',
      'Carlos',
      34,
      'https://pictures.abebooks.com/isbn/9781735039039-es.jpg',
      4
    ),
    new Book(
      'Los secretos de las obras de arte',
      'Arte',
      'Carlitos ',
      25,
      'https://m.media-amazon.com/images/I/51+e+9Q9T4S._SX375_BO1,204,203,200_.jpg',
      8
    ),
  ];

  public getAll(): Book[] {
    return this.books;
  }

  public getOne(id_libro: number): Book {
    return this.books.find((book) => book.id_book === id_libro);
  }

  public add(book: Book): void {
    this.books.push(book);
  }

  public edit(book: Book): boolean {
    const index = this.books.findIndex((_book) => _book.id_book == book.id_book);

    if (index !== -1) {
      this.books[index] = book;
      return true;
    }

    return false;
  }

  public delete(id_book: number): boolean {
    let filtrado = this.books.filter((book) => book.id_book !== id_book);
    this.books = filtrado;
    return true;
  }
}
