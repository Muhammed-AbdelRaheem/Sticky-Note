import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {

    if (localStorage.getItem('token')!==null) {
      this.decode();
      
    }


   }
  baseUrl: string = 'https://note-sigma-black.vercel.app/api/v1/users/'
  userInfo=new BehaviorSubject(null)
  signup(userData: object): Observable<any> {
    return this._http.post(this.baseUrl+'signUp', userData)
  }
  signin(userData: object): Observable<any> {
    return this._http.post(this.baseUrl+"signin", userData)
  }

  decode(){
    let encode=JSON.stringify(localStorage.getItem('token'));
    let decode:any=jwtDecode(encode)
    this.userInfo.next(decode)
    
    console.log(this.userInfo);
    
  }


  logout(){
    this.userInfo.next(null)
    localStorage.removeItem('token')
  }

}


