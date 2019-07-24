import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import iReview from '../review';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product;
  public errorFetchingProduct;
  public productId;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    //the call to backend is invoked only upon calling the subscribe func!!
    this.productsService.getProduct(this.productId).subscribe(
      ( product ) => {
        this.product = product;
      },
      ( error ) => {
        this.errorFetchingProduct = error;
      }
    );
  }
  handleReviewAdded(review:iReview){
    alert(review.title);
  }

}
