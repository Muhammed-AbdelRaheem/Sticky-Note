import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl: string = 'https://note-sigma-black.vercel.app/api/v1/notes/'
  token: any = { Token: '3b8ny__' + localStorage.getItem('token') }

  note:BehaviorSubject<any> = new BehaviorSubject("")

  constructor(private _http: HttpClient) { }

  addnote(data:object): Observable<any> {
    return this._http.post(this.baseUrl,data ,{ headers: this.token })
  }


  getnote():Observable<any>{
    return this._http.get(this.baseUrl,{headers:this.token})
  }


  updatenote(id:string,data:object):Observable<any>{
    return this._http.put(this.baseUrl+id,data,{headers:this.token})
  }

  deletenote(id:string):Observable<any>{
   return this._http.delete(this.baseUrl+id,{headers:this.token})
  }
}
