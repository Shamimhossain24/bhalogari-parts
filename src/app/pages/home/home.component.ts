import { ProductDetailsService } from './../../services/product-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(
  private productDetails:ProductDetailsService,
  private router:Router
) { }

  ngOnInit(): void {
    /*
     * Call setTimer();
     */
    setInterval(() =>{
      this.setTimer();
   },1000)
  }

  /*** clock calculation */
    days:any;
    hours:any;
    min:any;
    sec:any;
    result :any;
  /**
   * setTimer()
   */
  setTimer(){
      var dest = new Date("jan 3, 2023 10:00:00").getTime();
      var now = new Date().getTime();
      var diff = dest - now;
      this.days = Math.floor(diff/(1000*60*60*24));
      this.hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
      this.min = Math.floor((diff % (1000*60*60))/(1000*60));
      this.sec = Math.floor((diff % (1000*60))/1000);;
      /**
       * Some Condition
       */
        if(this.days < 10){
          this.days = '0'+this.days;
        }
        if(this.hours < 10){
          this.hours = "0" + this.hours;
        }
        if(this.min < 10){
          this.min = "0" + this.min;
        }
        if(this.sec < 10){
          this.sec = "0" + this.sec;
        }/* condition end */
      /*  Result */
      this.result = `${this.days} : ${this.hours} : ${this.min} : ${this.sec}`;
  }

  
  /*** products area */
  products: any[] = [
    {
      _id:1,
      image: './assets/images/temp/products/product-13-1.jpg',
      name: 'Fantastic 12-Stroke Engine With A Power of 1991 hp',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:2,
      image: './assets/images/temp/products/product-14-1.jpg',
      name: 'Set of Four 19 Inch Spiked Tires',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:3,
      image: './assets/images/temp/products/product-15-1.jpg',
      name: '40 Megawatt Low Beam Lamp',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:4,
      image: './assets/images/temp/products/product-16-1.jpg',
      name: 'Brandix Driver seat',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:5,
      image: './assets/images/temp/products/product-9-1.jpg',
      name: 'Brandix Manual Five Speed Gearbox',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:6,
      image: './assets/images/temp/products/product-10-1.jpg',
      name: 'Set of Car Floor Mats Brandix Z4',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:7,
      image: './assets/images/temp/products/product-11-1.jpg',
      name: 'Taillights Brandix Z54',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
    {
      _id:8,
      image: './assets/images/temp/products/product-12-1.jpg',
      name: 'Wiper Blades Brandix WL2',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
    },
  ];


/****
 * category Data
 */
  categoryData:any[] =[
    {
      _id:1,
      title:"Body and Interior",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/tile-body-interior.jpg"
    },
    {
      _id:2,
      title:"Engine",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/tile-engine.jpg"
    },
    {
      _id:3,
      title:"Exhaust",
      subTitle:"(25 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/tile-exhaust.jpg"
    },
    {
      _id:4,
      title:"Heating and Air Conditioning",
      subTitle:"(27 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/tile-heating-air-conditioning.jpg"
    },
    {
      _id:5,
      title:"Wheel Components",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/tile-wheel-components.jpg"
    },
  ]

  /****
 * category Data
 */
   brandData:any[] =[
    {
      _id:1,
      title:"AimParts",
      subTitle:"(45 items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-1.png"
    },
    {
      _id:2,
      title:"WindEngine",
      subTitle:"(45 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-2.png"
    },
    {
      _id:3,
      title:"TurboElectric",
      subTitle:"(35 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-3.png"
    },
    {
      _id:4,
      title:"StartOne",
      subTitle:"(27 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-4.png"
    },
    {
      _id:5,
      title:"Brandix",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-5.png"
    },
    {
      _id:6,
      title:"ABS-Brand",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/brand-6.png"
    },
  ]


  featureData: any[] = [
    {
      image: './assets/images/temp/products/product-5-1.jpg',
      name: 'Twin Exhaust Pipe From Brandix Z54',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/temp/products/product-6-1.jpg',
      name: ' Motor Oil Level 5',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
      
    },
    {
      image: './assets/images/temp/products/product-7-1.jpg',
      name: 'Brandix Engine Block Z4',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/temp/products/product-8-1.jpg',
      name: 'Brandix Clutch Discs Z175',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/temp/products/product-1-1.jpg',
      name: 'Brandix Spark Plug Kit ASR-400',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/temp/products/product-2-1.jpg',
      name: 'Brandix Brake Kit BDX-750Z370-S',
      prvPrice: 34,
      currPrice: 23,
      unit: 'pecies',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
  ];
  /***
   * Banner-data
   */
  bannerData:any[] =[
    {
      _id:'1',
      bannerImage:"./assets/images/temp/banner/slide-1.jpg",
      bannerTitle:"Yours Precision crafted performance",
      bannerDes:"Vehicula curae mi senectus sodales proin, ultricies gravida suspendisse.",
      routerLink:"#"
     },
   {
    _id:'2',
    bannerImage:"./assets/images/temp/banner/slide-2.jpg",
    bannerTitle:"The road will never be the same of Luxury",
    bannerDes:"Inceptos aptent eleifend metus. Porta montes nibh sed mollis nascetur dui",
    routerLink:"#"
   },
   {
    _id:'3',
    bannerImage:"./assets/images/temp/banner/slide-3.jpg ",
    bannerTitle:"The road will never be the same of Luxury",
    bannerDes:"Inceptos aptent eleifend metus. Porta montes nibh sed mollis nascetur dui",
    routerLink:"#"
   },
 
  ]
  
  blogData:any[] =[
    {
      _id:'1',
      blogImage:"./assets/images/temp/image/post-5.jpg",
      blogTitle:"Germany Was The First Country To Professionalize Philosophy",
      blogDes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...",
      routerLink:"#"
    },
    {
      _id:'2',
      blogImage:"./assets/images/temp/image/post-5.jpg",
      blogTitle:"Logic Is The Study Of Reasoning And Argument Part 1",
      blogDes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...",
      routerLink:"#"
    },
    {
      _id:'3',
      blogImage:"./assets/images/temp/image/post-7.jpg",
      blogTitle:"Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense",
      blogDes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...",
      routerLink:"#"
    },
    {
      _id:'1',
      blogImage:"./assets/images/temp/image/post-8.jpg",
      blogTitle:"An Advantage Of Digital Circuits When Compared To Analog Circuits",
      blogDes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...",
      routerLink:"#"
    }
  ]

}
