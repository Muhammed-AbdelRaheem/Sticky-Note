import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from '../Core/search.pipe';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/Componant/register/register.component';
import { LoginComponent } from 'src/Componant/login/login.component';
import { HomeComponent } from 'src/Componant/home/home.component';
import { NotfoundComponent } from 'src/Componant/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/Componant/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CutTextPipe } from 'src/Core/cut-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    SearchPipe,
    CutTextPipe
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
