import { Component } from '@angular/core';
import { Firestore, collection, getDocs, query,limit } from '@angular/fire/firestore';
export interface product{
  id?: string,
  name: string,
  price: string,
  img: string,
}
@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})

export class ContentMainComponent {
  productList1:product[] = []
  productList2:product[] = []
  constructor(private fbs: Firestore) {
    this.getData()
    this.getDataF()
  }
  async getData() {
    const collectionT = collection(this.fbs, 'product')
    let q = query(collectionT);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const result = doc.data()
      const productItem: product = {
        img: result['img'],
        price: result['price'],
        name: result['name']
      }
      this.productList1.push(productItem)
    });
    console.log(this.productList1)
  }

  async getDataF() {
    const collectionT = collection(this.fbs, 'product')
    let q = query(collectionT, limit(5));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const result = doc.data()
      const productItem: product = {
        img: result['img'],
        price: result['price'],
        name: result['name']
      }
      this.productList2.push(productItem)
    });
    console.log(this.productList2)
  }
}
