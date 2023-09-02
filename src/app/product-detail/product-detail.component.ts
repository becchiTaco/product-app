import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {                                   //
  @Input() product: any;                                                //
  @Output() productSelected: EventEmitter<any> = new EventEmitter();    //
  colorStock: string = 'blue';
  selectProduct() {                                                     //
    this.productSelected.emit(this.product);                            //
  }
}
