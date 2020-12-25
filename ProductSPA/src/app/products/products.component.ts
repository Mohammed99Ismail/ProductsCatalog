import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from '../services/Iproduct';
import { ProductService } from '../services/product.service';
import * as XLSX from 'xlsx';  
import { ExcelServiceService } from '../services/excel-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  startIndex=0;
  endIndex=5;

  pageSize=5;
  items=[];
  allProducts:Iproduct[];
  myDate = new Date();

  //product:product;
  products:Iproduct[]=[]
  constructor(private serivce:ProductService,private excel:ExcelServiceService,private router:Router) {
   }

  ngOnInit(): void {
    this.serivce.getProducts().subscribe(
      (products:any)=>{
        //console.log(products);
        this.products=this.allProducts=products;
        this.items.length=Math.floor(this.allProducts.length/this.pageSize)+1;
        console.log(this.items)
      }
    )
  }

  viewProduct(i){
    //console.log(i);
    this.serivce.editAndViewProduct(i);
    this.router.navigate(['/Edit']);
  }

  newProduct(){
    this.router.navigate(['/Create'])
  }

  exportData(){
    this.excel.exportAsExcelFile(this.products,"Products")
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.products = pageOfItems;
  }

  searchEntries(term) {
    let arr:string[]=[]
    for(let i=0;i<this.products.length;i++){
      var value=this.products[i].name.toUpperCase();
      var str=value.substring(0,term.length)
      if(str==term.toUpperCase()&&term!=''){
        arr.push(this.products[i].name);
      }
    } 
    return arr;
  }
  onKey(value){
    var products=this.allProducts;

    var results=this.searchEntries(value)
    if(results.length!=0){
      for(let i=0;i<results.length;i++){
        products=products.filter(prd=>prd.name==results[i]);
        this.products=products
      }
    }else{
      this.products=this.allProducts
    }
  }

  pagination(numberOfPage){
    this.startIndex=numberOfPage*this.pageSize;
    this.endIndex=(numberOfPage+1)*this.pageSize;
    /* console.log(this.startIndex)
    console.log(this.endIndex) */
  }
  forward(){
    if(this.startIndex>0){
      /* console.log((this.startIndex-5))
      console.log((this.endIndex-5)) */
      this.startIndex=this.startIndex-5;
      this.endIndex=this.endIndex-5;
    }
  }
  
  back(){
    /* console.log(this.endIndex+' spec')
    console.log(this.allProducts.length+' spec') */
    if(this.endIndex<this.allProducts.length){
      /* console.log((this.startIndex+5))
      console.log((this.endIndex+5)) */
      this.startIndex=this.startIndex+5;
      this.endIndex=this.endIndex+5;
    }
  }

}
