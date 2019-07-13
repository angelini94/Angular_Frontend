import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { UsersPagesComponent } from './pages/users-pages/users-pages.component';
import { CommonModule } from '@angular/common';
import { FormDetailComponent } from './components/form-detail/form-detail.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersPagesComponent },
  { path: 'detail/:id', component: FormDetailComponent },
  { path: 'add', component: AddUserComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
