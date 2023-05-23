import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  public miUser: User

  constructor()
  {
    this.miUser = new User("Alba", "Carranza Gallardo", "alba@gmail.com", "https://www.friking.es/img/cms/Landings/fotonoticia_20210223111323_1200.jpg")
  }

 
  public cambiar(newName: HTMLInputElement, newSurname: HTMLInputElement, newEmail: HTMLInputElement, newPhoto: HTMLInputElement)
  {
    console.log(this.miUser.name);
    this.miUser.name = newName.value, this.miUser.last_name = newSurname.value, this.miUser.email = newEmail.value, this.miUser.photo = newPhoto.value;
    console.log(this.miUser.name);
  }
}
