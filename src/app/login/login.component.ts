import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fg: FormBuilder){
    this.loginForm = this.fg.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      console.log('Formulario Invalido');
      
    }
  }
}
