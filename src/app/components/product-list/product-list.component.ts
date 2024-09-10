import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../product.service';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public productsList?: any[];
  // currentTutorial: Tutorial = {};
  // currentIndex = -1;
  // title = '';
  toast:Toast | undefined;
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  constructor(private productService: ProductService) { }

  retrieveTutorials(): void {
    debugger;
    this.productService.getAll()
      .subscribe((data) =>
      {
        if(data.status){
          this.productsList = data.data;
          console.log(this.productsList);
        }
        else{
          console.log(data.errorMessage);
        }
      },
    )
  }

  DeleteProduct(id:any)
  {
    debugger
    this.productService.DeleteProduct(id).subscribe((data) => {
      if(data.status){
        alert("Record Deleted succesfully")
      }
      else{
        console.log(data.errorMessage);
      }
    })
  }
}
