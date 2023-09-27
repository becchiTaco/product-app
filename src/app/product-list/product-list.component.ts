import { Component } from '@angular/core';                    //Impota decoradores (Component) desde @angular/core
import { ApiService } from '../api.service';
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

  products: any[] = [];                                        //Se crea un arreglo de objetos con datos id, name, description, price, stock, image
  

  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      data.forEach((item: any) =>{
        this.products.push({
            id: item.id,
            name: item.title,
            description: item.description,
            price: item.price,
            stock: item.rating.count,
            image: item.image,
            color: 'blue',
            specs: item.category
          });
      });
    }, (error) => {
      console.log(error);
    } 
    );
  }

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
