import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import iReview from "../Review";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @Input()
  productId:number|string;

  @Output()
  public reviewAdded: EventEmitter<iReview> = new EventEmitter<iReview>();
  
  public review:iReview = {
    reviewer: '',
    starRating: 5,
    title: '',
    text: ''
  };
  constructor( private productService: ProductsService) { }

  ngOnInit() {
  }
  addReview( event ){
    event.preventDefault(); //form submission is prevented
    console.log(this.review);

    this.productService.addReview(this.productId, this.review).subscribe(
      ( review:iReview ) => {
        alert('Your review has been added successfullt!');
        this.reviewAdded.emit(review);
      },
      ( error ) => {
        alert('Something went wrong. We were unable to add your review.');
      }
    );
  }

}
