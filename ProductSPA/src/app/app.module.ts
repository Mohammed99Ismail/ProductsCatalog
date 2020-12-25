import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';

const routes:Routes=[
  {path:'',redirectTo:'Products',pathMatch: 'full'},
  {path:'Products',component:ProductsComponent},
   {path:'Create',component:CreateProductComponent},
   {path:'Edit',component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
