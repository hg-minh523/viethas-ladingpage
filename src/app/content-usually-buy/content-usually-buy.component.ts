import { Component } from '@angular/core';
const productUsuallyBuy: any[] = [
  {
    img: '../../assets/product.jpeg',
    name: 'Bột mì, bột trộn sắn'
  },
  {
    img: '../../assets/product.jpeg',
    name: 'nguyên liệu, phụ gia thực phẩm'
  },
  {
    img: '../../assets/product.jpeg',
    name: 'hộp, bao bì, team nhãn, dụng cụ'
  },
  {
    img: '../../assets/product.jpeg',
    name: 'thực phẩm đóng gói'
  },
  {
    img: '../../assets/product.jpeg',
    name: 'thực phẩm khác'
  },
  {
    img: '../../assets/product.jpeg',
    name: 'thực phẩm chay'
  }
]
@Component({
  selector: 'app-content-usually-buy',
  templateUrl: './content-usually-buy.component.html',
  styleUrls: ['./content-usually-buy.component.css']
})
export class ContentUsuallyBuyComponent {
  productUsuallyBuy = productUsuallyBuy
}
