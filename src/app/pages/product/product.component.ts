import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
      //this.getProducts();
      //this.getProduct();
      //this.createProduct();
      this.updateProduct()
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response)
    });
  }
  
  getProduct(){
    
    const url = "https://api.escuelajs.co/api/v1/products/221";
    const response = this.httpClient.get(url).subscribe
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
    const url = "https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url,data).subscribe
    (response => {console.log(response)
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
    const url = "https://api.escuelajs.co/api/v1/products/235";
    this.httpClient.put(url,data).subscribe
    (response => {console.log(response)
    });
  }

  
}
