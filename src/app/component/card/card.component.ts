import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() book_Padre: Book;
 @Input() esPar: boolean;
 @Output() tarjetaCerrada = new EventEmitter<Book>();


 constructor() {}

 ngOnInit(): void
 {
  
 } 
 public cerrarTarjeta() {
  this.tarjetaCerrada.emit(this.book_Padre);
}

}

