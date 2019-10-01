import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import {Product} from '../../../models/product';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[];
  constructor(public productService: ProductService) { }
  dataSource = new MatTableDataSource(this.productList);
  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach( element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      });
      console.log(this.productList);
    });
}
onEdit(product: Product) {
  this.productService.selectedProduct = Object.assign({}, product);
}
onDelete($key: string) {
  this.productService.deleteProduct($key);
}
}
