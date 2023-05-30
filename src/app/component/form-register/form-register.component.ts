import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;

  public user: User;

  constructor(private formBuilder: FormBuilder)
  {
    this.buildForm();
  }

  public register()
  {
    const user = this.myForm.value;
    console.log(user);
 
  }
   private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
    nombre: [, [Validators.required]],
    apellidos: [, [Validators.required]],
    email: [, [Validators.required, Validators.email]],
    url: [,[Validators.required]],
    password: [,[Validators.required, Validators.minLength(minPassLength)]],
    repetirPassword: [,[Validators.required, this.checkPasswords]]
  })
   }
  private checkPasswords(control : AbstractControl){
    let resultado = {matchPassword : true};
    if(control.parent?.value.password == control.value)
      resultado = null;
      return resultado;
    
  }
  ngOnInit(): void {

};
}


