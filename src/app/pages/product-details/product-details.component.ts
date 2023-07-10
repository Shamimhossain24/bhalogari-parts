import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Router } from '@angular/router';
import { ProductDetailsService } from './../../services/product-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  step = 1;

  constructor(
    private productDetails:ProductDetailsService,
    private router:Router,
    private carousel:CarouselCntrlService
  ) { }

  ngOnInit(): void {
  }

  /*** 
   * stepControll()
   * 
   */
   stepControll(number:any){
    this.step = number;
   }







  /*** products area */
  products: any[] = [
    {
      _id:1,
      image: './assets/images/temp/products/01.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:2,
      image: './assets/images/temp/products/02.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:3,
      image: './assets/images/temp/products/03.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:4,
      image: './assets/images/temp/products/04 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:5,
      image: './assets/images/temp/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:6,
      image: './assets/images/temp/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:7,
      image: './assets/images/temp/products/07.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:8,
      image: './assets/images/temp/products/08.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:9,
      image: './assets/images/temp/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:10,
      image: './assets/images/temp/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
  ];


 

}
