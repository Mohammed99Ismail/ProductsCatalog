import { Injectable } from "@angular/core";
import { Iproduct } from './Iproduct' 
import { HttpClient } from '@angular/common/http';
import { product } from "./products";

@Injectable()
export class ProductService{

    constructor(private http:HttpClient){}

    product:product=new product();//=new product('','',null,null);

    editAndViewProduct(p){
        this.product.id=p.id;
        this.product.name=p.name;
        this.product.photo=p.photo;
        this.product.price=p.price;
        this.product.lastUpdate=p.lastUpdate;
    }

    createProduct(prd){
        return this.http.post('http://localhost:5000/api/products',prd);
    }

    getProducts(){
        return this.http.get('http://localhost:5000/api/products');
    }

    updateProduct(prd,id){
       return this.http.put('http://localhost:5000/api/products/'+id,prd);
    }

    deleteProduct(id){
        return this.http.delete('http://localhost:5000/api/products/'+id);
    }

}