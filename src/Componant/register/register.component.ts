import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService ,private _Router:Router) { }
  msg:string="";

isloading:boolean=false


  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6}$/)]),
    age: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[01245][0-9]{8}$/)])
  })



  handleForm(signUpForm: FormGroup) {
    this.isloading=true
    console.log(signUpForm);
    this._AuthService.signup(signUpForm.value).subscribe({
      next: data => {
        console.log(data);
        this.isloading=false
        this._Router.navigate(["/login"])

      },
      error: err => {
        this.isloading=false

        console.log(err);
        this.msg=err.error.msg

      }
    })
  }


}




