import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';

const routes:Routes=[
    {path:'',component:ProductsComponent,children:[
        {path:'Create',component:CreateProductComponent},
        {path:'Edit',component:EditProductComponent}
    ]}
  ]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }