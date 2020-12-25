import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproduct } from '../services/Iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Iproduct={
    name:'',
    photo:'',
    price:null,
    lastUpdate:null
  };//=new product('','',null,null);

  @ViewChild('productform') createdProduct:NgForm

  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.product.name=this.createdProduct.value.name;
    this.product.photo=this.createdProduct.value.imagePath;
    this.product.price=this.createdProduct.value.price;
    this.product.lastUpdate=new Date(Date.now().toString());

    //console.log(JSON.stringify(this.product))

    this.service.createProduct(this.product).subscribe(
      //res=>console.log(res)
    );
    this.router.navigate(['/Products']);
  }

}
