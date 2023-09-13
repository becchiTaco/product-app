import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fg: FormBuilder, private router: Router){
    this.loginForm = this.fg.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['/products']);
    }else{
      console.log('Formulario Invalido');
    }
  }
}
