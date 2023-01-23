import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  constructor(private productHttpService: ProductHttpServiceService){

  }

  ngOnInit(): void {
      //this.getProducts();
      //this.getProduct();
      //this.createProduct();
      //this.updateProduct();
      //this.deleteProduct();
    }

  getProducts(){
    const response = this.productHttpService.getAll().subscribe
    (response => {console.log(response)
    });
  }
  
  getProduct(){
    const response = this.productHttpService.getOne(25).subscribe
    (response => {console.log(response)
    });
  }
  
  createProduct(){
    const data = {
      title:"camiseta",
      price: 50,
      description: "deportiva/ David Castro",
      images: ['https://imgs.search.brave.com/qEv56PXlDP4gIkWR4_SdI0LxhwxBY-PvDn8BodT0nkU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/YzUwUVVMRHI3dzBF/NnZrSk8xQVRnSGFF/NyZwaWQ9QXBp'],
      categoryId: 3,
    }
    this.productHttpService.store(data).subscribe
    (response => {console.log(data)
    });
  }
  updateProduct(){
    const data = {
      title:"camiseta",
      price: 20,
      description: "deportiva/ David Castro",
      images: ['https://imgs.search.brave.com/qEv56PXlDP4gIkWR4_SdI0LxhwxBY-PvDn8BodT0nkU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/YzUwUVVMRHI3dzBF/NnZrSk8xQVRnSGFF/NyZwaWQ9QXBp'],
      categoryId: 3,
    }
    this.productHttpService.update(60,data).subscribe
    (response => {console.log(response)
    });
  }

   deleteProduct(){    
     this.productHttpService.destroy(61).subscribe
    (response => {console.log(response)
    });
  }
}
