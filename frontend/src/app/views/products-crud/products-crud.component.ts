import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css'],
})
export class ProductsCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Products',
      icon: 'storefront',
      routerUrl: '/products',
    };
  }
  ngOnInit(): void {}
  navigateToProductCreate() {
    this.router.navigateByUrl('product/create');
  }
}
