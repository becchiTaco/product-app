import { Component, Input } from '@angular/core';       //Impota decoradores (Component e Input) desde @angular/core

@Component({                                            //Este fragmento de código se usa para configurar el componente
  selector: 'app-product-header',                       //Selector es una cadena que especifica como se puede usar el compoennte de una plantilla.  HTML
  templateUrl: './product-header.component.html',       //La propiedad templateUrl define la ubicación de la plantilla HTML.
  styleUrls: ['./product-header.component.css']         //La propuedad styleUrls define la ruta de la hoja de estilo.
})

export class ProductHeaderComponent {                   //Se define una clase con acceso global llamada ProductHeaderComponent
  @Input() HcarCount: number = 0;                       //El decorador @Input marca una propiedad de componentes como entrada, esto hace que reciba valores desde el componente padre (en este caso product-list).
}
