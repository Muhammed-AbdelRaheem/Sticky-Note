import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Componant/home/home.component';
import { LoginComponent } from 'src/Componant/login/login.component';
import { NotfoundComponent } from 'src/Componant/notfound/notfound.component';
import { RegisterComponent } from 'src/Componant/register/register.component';
import { authGuard } from 'src/Core/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",canActivate:[authGuard],component:HomeComponent,title:'home'},
  {path:"login",component:LoginComponent,title:'login'},
  {path:"register",component:RegisterComponent,title:'register'},
  {path:"**",component:NotfoundComponent,title:'notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
