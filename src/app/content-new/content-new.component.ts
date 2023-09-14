import { Component } from '@angular/core';
interface news {
  img: String,
  content: String,
}

const newList: news[] = [
  {
    img: '../../assets/news.jpeg',
  content: 'Cách làm Bánh Mì Hoa cúc pháp chuẩn vị'
  },
  {
    img: '../../assets/news.jpeg',
  content: 'An toàn vệ sinh thực phẩm'
  },
  {
    img: '../../assets/news.jpeg',
  content: 'Cách làm Bánh Mì Hoa cúc pháp chuẩn vị'
  },
]
@Component({
  selector: 'app-content-new',
  templateUrl: './content-new.component.html',
  styleUrls: ['./content-new.component.css']
})
export class ContentNewComponent {
  newsList = newList
}
