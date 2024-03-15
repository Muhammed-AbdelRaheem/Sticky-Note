import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _router:Router ){}

isloading: boolean = false;
msg:string=''
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6}$/)]),
  })



  handleform(signInForm:FormGroup){
    this.isloading=true
    this._AuthService.signin(signInForm.value).subscribe({
      next:data=>{
        console.log(data);
    this.isloading=false
        localStorage.setItem('token',data.token)
        this._AuthService.decode()
        this._router.navigate(['/home']);
      },
      error:err=>{
    this.isloading=false

        console.log(err);
        this.msg=err.error.msg
      }
    })
  }
}
