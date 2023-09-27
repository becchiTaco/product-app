import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  action: string = 'new';
  product: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private apiService: ApiService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(0)]],
      stock: ['', [Validators.required, Validators.minLength(0)]],
      image: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.action = params['action'];
      if (this.action !== 'create' && params['data']) {
        this.product = JSON.parse(params['data']);
        this.productForm.patchValue({
          name: this.product.name || '',
          price: this.product.price || '',
          stock: this.product.stock || '',
          image: this.product.image || '',
          description: this.product.description || '',
        })
      }

      if (this.action == 'show') {
        this.productForm.disable();
      }
    });
  }

  getNameTitle() {
    if (this.action == 'create') {
      return 'Nuevo Producto';
    } else if (this.action == 'show') {
      return 'Ver producto';
    } else {
      return 'Editar Producto';
    }
  }

  getButtonTitle() {
    if (this.action == 'create') {
      return 'Crear Producto';
    } else {
      return 'Editar Producto';
    }
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    let body = {};
    if (this.action == 'create') {
      body = {
        title: this.productForm.value.name,
        price: this.productForm.value.price,
        image: this.productForm.value.image,
        description: this.productForm.value.description
      }
      this.apiService.createProduct(body).subscribe((data) => {
        console.log(data);
        alert('Producto Creado');
        this.location.back();
      })
    } else if (this.action = 'edit') {
      body = {
        title: this.productForm.value.name,
        price: this.productForm.value.price,
        image: this.productForm.value.image,
        description: this.productForm.value.description
      }
      this.apiService.updateProduct(this.product.id, body).subscribe((data) => {
        console.log(data);
        alert("Producto Creado");
        this.location.back();
      });

    }
  }
}
