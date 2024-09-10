import { Component } from '@angular/core';
import { Addproduct } from '../../models/addproduct';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productService:ProductService) {
        
  }  
  productForm = new FormGroup({
    Name: new FormControl(),
    Decription: new FormControl(),
    Price: new FormControl(),
    Stock: new FormControl(),
  });

  AddProduct() {
    debugger
    
    var product = {
      ProductName: this.productForm.value.Name,
      ProductDescription: this.productForm.value.Decription,
      ProductPrice: this.productForm.value.Price,
      ProductStock:this.productForm.value.Stock
    }
    console.log(product)
    this.productService.AddProduct(product).subscribe((data)=>
    {
      debugger;
      if(data.status){
       alert("Product Inserted Successfully");
      }
      else
      {
        alert("Error "+ data.errorMessage)
      }
    })
  }
}

