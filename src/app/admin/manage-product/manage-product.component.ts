import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
})
export class ManageProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      productName: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?!.*\bma túy\b)(?!.*\bhàng trắng\b).*$/i),
        ],
      ],
      productCode: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      starRating: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.invalid) {
      // Nếu form không hợp lệ, hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy ý.
      return;
    }
    console.log(this.productForm.value);
    // Tiếp tục xử lý dữ liệu hoặc gửi form
  }
}
