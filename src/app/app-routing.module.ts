import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';



import { PHomeComponent } from './pems/home/home.component';

import { PEditComponent } from './pems/edit/edit.component';
import { PShowComponent } from './pems/show/show.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:PHomeComponent},
  
  {path:"edit/:aid/:paramid", component:PEditComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
