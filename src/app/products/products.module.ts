import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from "./products.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './products-routing.module';
import { AddReviewComponent } from './add-review/add-review.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, AddReviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
