import { Component } from '@angular/core';
import { ProdService } from './prod.service';
import { app } from './app';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   products:app[]=[];
  
   constructor(private prodservice:ProdService){}

   ngOnInit(){
    this.getProductList();
   }
   getProductList(){
      this.prodservice.getProduct().subscribe(
        response =>this.products=response
      );
   }
       
  }
