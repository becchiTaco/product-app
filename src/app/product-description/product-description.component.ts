import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  DESproduct: any = {}
  
  constructor(private route: ActivatedRoute){}

  async ngOnInit() {
    await this.route.queryParams.subscribe(params =>{
      console.log(params);
      this.DESproduct = JSON.parse(params['data']);
    });
  }

  selectProduct(){
    //this.productSelected.emit(this.product);
  }
}