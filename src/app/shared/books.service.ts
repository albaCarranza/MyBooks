import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
private url = "http://localhost:3000/book"
constructor(private http : HttpClient) { }

  // private books: Book[] = [
  //   new Book(
  //     'La Biblia de las brujas',
  //     'Fantasía',
  //     'Carla',
  //     45,
  //     'https://m.media-amazon.com/images/I/81k6uvXFArL.jpg',
  //     0
  //   ),
  //   new Book(
  //     'Anatomy for sculptors',
  //     'Arte',
  //     'Carlos',
  //     34,
  //     'https://pictures.abebooks.com/isbn/9781735039039-es.jpg',
  //     4
  //   ),
  //   new Book(
  //     'Los secretos de las obras de arte',
  //     'Arte',
  //     'Carlitos ',
  //     25,
  //     'https://m.media-amazon.com/images/I/51+e+9Q9T4S._SX375_BO1,204,203,200_.jpg',
  //     8
  //   ),
  // ];

  public getAll(): Observable <object> {
    return this.http.get<Book[]>(this.url);
  }

  public getOne(id_libro: number): Observable <object> {
    return this.http.get(this.url+'/'+id_libro);
  }

  public add(book: Book): Observable <object> {
    return this.http.post(this.url,book);
  }

  public edit(book: Book): Observable <object> {
    return this.http.put(this.url, book);
  }

  public delete(id_book: number): Observable <object> {
    return this.http.delete(this.url+'/'+id_book);
  }
}
