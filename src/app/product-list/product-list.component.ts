import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  selectProduct: any;                                 //
  carCount: number = 0;


  products = [
    {
      id: 1, name: "Laptop", description: "Es una Laptop", price: 1500, stock: 10,
      image: 'https://media.mipc.com.mx/catalog/product/cache/7290563697b2fb024a6e1f3ba6ae4586/9/9/99364481b5b5420d927eb50e004e2330.jpg'
    },
    {
      id: 2, name: "Teclado", description: "Es un Teclado", price: 1000, stock: 1,
      image: 'https://media.mipc.com.mx/catalog/product/cache/7290563697b2fb024a6e1f3ba6ae4586/8/b/8be5c4dcf0d39c1ffb5587840996882f.jpg'
    },
    {
      id: 3, name: "Mouse", description: "Es un Mouse", price: 500, stock: 0,
      image: 'https://www.rockinit.co.za/wp-content/uploads/2020/10/Razer-Naga-Pro-Modular-Wireless-Mouse-with-Swappable-Side-Plates.jpg'
    }
  ];

  handleProductSelected(product: any) {               //
    this.selectProduct = product;
    product.stock--;
    this.carCount++;
    alert("Producto Seleccionado: " + product.name + " \n Tiene un precio de: " + product.price);    //
  }
}
