import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.less'],
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  showRatingMessage: boolean = false;
  message: string = '';

  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 75) / 5;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.showRatingMessage = !this.showRatingMessage;
    this.message = `Đánh giá của sản phẩm là ${this.rating} sao!`;
    this.ratingClicked.emit(this.message);
  }
}
