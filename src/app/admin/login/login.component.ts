import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userData = {
    tenDN: '',
    matKhau: '',
  };
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.userData);
  }
  suggest() {
    this.userData.tenDN = 'Fply@fe.edu.vn';
  }
}
