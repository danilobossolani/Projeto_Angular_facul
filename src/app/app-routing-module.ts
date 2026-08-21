import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Cliente } from './cliente/cliente';
import { Paginanaoencontrada } from './paginanaoencontrada/paginanaoencontrada';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:Home},
  {path:'cliente', component:Cliente},
  {path:'**',component:Paginanaoencontrada}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
