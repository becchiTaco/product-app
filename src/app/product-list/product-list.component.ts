import { Component } from '@angular/core';                    //Impota decoradores (Component) desde @angular/core

@Component({                                                  //Este fragmento de código se usa para configurar el componente
  selector: 'app-product-list',                               //Selector es una cadena que especifica como se puede usar el compoennte de una plantilla.  HTML
  templateUrl: './product-list.component.html',               //La propiedad templateUrl define la ubicación de la plantilla HTML.
  styleUrls: ['./product-list.component.css']                 //La propuedad styleUrls define la ruta de la hoja de estilo.
})

export class ProductListComponent {                           //Habilita y crea la clase ProductListComponent para todo el documento
  selectProduct: any;                                         //Se crea la variable selectProduct de cualquier tipo.
  LcarProduct: any[] = [];                                    //
  var_pipe: string = 'Angular';                               //
  LcarCount: number = 0;

  products = [                                                //Se crea un arreglo de objetos con datos id, name, description, price, stock, image
    {
      id: 1, name: "Laptop", description: "Es una Laptop", price: 1500, stock: 10,
      image: 'https://media.mipc.com.mx/catalog/product/cache/7290563697b2fb024a6e1f3ba6ae4586/9/9/99364481b5b5420d927eb50e004e2330.jpg'
    },
    {
      id: 2, name: "Teclado", description: "Es un Teclado", price: 1000, stock: 10,
      image: 'https://media.mipc.com.mx/catalog/product/cache/7290563697b2fb024a6e1f3ba6ae4586/8/b/8be5c4dcf0d39c1ffb5587840996882f.jpg'
    },
    {
      id: 3, name: "Mouse", description: "Es un Mouse", price: 500, stock: 10,
      image: 'https://www.rockinit.co.za/wp-content/uploads/2020/10/Razer-Naga-Pro-Modular-Wireless-Mouse-with-Swappable-Side-Plates.jpg'
    }
  ];

  handleProductSelected(Lproduct: any) {                                                              //Se crea una función llamada handleProductSelected y se crea la variable Lproduct de valor any
    const existingProduct = this.LcarProduct.findIndex((item) => item.id === Lproduct.id)             //-1
    if (existingProduct !== -1) {
      this.LcarProduct[existingProduct].quantity++;
    } else {
      Lproduct.quantity = 1;
      this.LcarProduct.push(Lproduct);                                                                 //Agrega al arreglo el producto seleccionado
    }
    this.LcarCount++;
    Lproduct.stock--;                                                                                 //Le resta 1 al stock
    //alert("Producto Seleccionado: " + Lproduct.name + " \n Tiene un precio de: " + Lproduct.price);    //Emite una alerta con un texto y concatena elementos de product (name, price)
  }
}
