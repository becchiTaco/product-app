import { Component, EventEmitter, Input, Output } from '@angular/core';     //Impota decoradores (Component, EventEmitter, Input, Output) desde @angular/core
import { Router } from '@angular/router';
@Component({                                                                //Este fragmento de código se usa para configurar el componente
  selector: 'app-product-detail',                                           //Selector es una cadena que especifica como se puede usar el compoennte de una plantilla.  HTML
  templateUrl: './product-detail.component.html',                           //La propiedad templateUrl define la ubicación de la plantilla HTML.
  styleUrls: ['./product-detail.component.css']                             //La propuedad styleUrls define la ruta de la hoja de estilo.
})

export class ProductDetailComponent {                                       // Define y crea una clase llamada ProductDetailComponent que está disponible para todo el proyecto
  @Input() Dproduct: any;                                                   // Se crea un decorador input que hace referencia a detail con un a variable Dproduct de tipo any
  @Output() DproductSelected: EventEmitter<any> = new EventEmitter();       // Se crea un decorador output que define una salida (DproductSelected), se crea una isntancia EventEmitter<any> para poder emitir eventos de cualquier tipo y se iguala con  new EventEmitter()
  colorStock: string = 'blue';                                              //Se crea una variable string llamada colorStock con el valor blue
  constructor(private router:Router){}
  selectProduct() {                                                         //Se crea una variable llamada selectProduct.
    this.DproductSelected.emit(this.Dproduct);                              // significa que el componente está emitiendo el evento DproductSelected y enviando el objeto Dproduct como parte del evento. Todo esto con relación al componente padre list
  }
  showDetail(){
    this.router.navigate(['/products/detail'], {queryParams: {data: JSON.stringify(this.Dproduct)}});
  }
}