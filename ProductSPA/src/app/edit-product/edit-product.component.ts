import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproduct } from '../services/Iproduct';
import { product } from '../services/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @ViewChild('productform') updatedForm:NgForm
  product:Iproduct;
  resourceProduct:product=new product();

  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.product=this.service.product;
  }
  onSubmit(){
    this.resourceProduct.name=this.updatedForm.value.name;
    this.resourceProduct.photo=this.updatedForm.value.imagePath;
    this.resourceProduct.price=this.updatedForm.value.price;
    this.resourceProduct.lastUpdate=new Date(Date.now().toString());

    /* console.log(JSON.parse(JSON.stringify(this.product)));
    console.log(JSON.parse(JSON.stringify(this.resourceProduct)));
    console.log(JSON.stringify(this.resourceProduct)); */
    this.service.updateProduct(this.resourceProduct,this.product.id).subscribe(
      //res=>console.log(res)
    )
    this.router.navigate(['/Products']);
  }

  deleteProduct(){
    this.service.deleteProduct(this.product.id).subscribe(
      //res=>console.log(res)
    )
  }

}
