import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../service/data.service';

export interface Product {
  id: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  http= inject(HttpClient);
  route = inject(ActivatedRoute);
  product$ : Observable<Product> | null = null;
  data!:string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.http.get<Product>(`http://localhost:3000/api/products/2`)
    // this.product$ = this.route.params.pipe(switchMap(params => {
    //   const id = params["id"];
    //   return this.http.get<Product>(`http://localhost:3000/api/products/${id}`);
    // }))
    this.dataService.getData().subscribe(res => {
      this.data = res;
    })

    //resolve guard ki implementation check
    // this.route.data.subscribe(res => {
    //   console.log("res['data']", res['data']);
    //   this.data = res['data'];
    // })
  }

}
