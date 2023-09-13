import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
// import {AuthGuard} from './auth.guard';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/detail', component: ProductDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
