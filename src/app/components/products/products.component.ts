import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  data:any;

  constructor(private dataservice:DataServiceService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.dataservice.getProducts().subscribe({
      next: (value) =>{
        this.data = value;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
