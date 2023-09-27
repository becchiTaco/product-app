import { NgModule } from '@angular/core';                             //Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';              //Angular Routing
import { MatFormFieldModule } from '@angular/material/form-field';    //Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //FontAwesome
import { CommonModule } from '@angular/common';                       //Angular Common Modules
import { AppComponent } from './app.component';                       //Components
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { LoginComponent } from './login/login.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteProductDialog } from './product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductHeaderComponent,
    ReversePipePipe,
    LoginComponent,
    ProductDescriptionComponent,
    ProductFormComponent,
    ProductTableComponent,
    DeleteProductDialog
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    FontAwesomeModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
