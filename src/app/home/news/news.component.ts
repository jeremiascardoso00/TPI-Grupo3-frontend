import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  news:any = [
    [
      {
        tittle: "test",
        message: "a",
        image: "../../../assets/novedades.jpg"
      }
    ],
    [
      {
        tittle: "test",
        message: "b",
        image: "../../../assets/novedades.jpg"
      },
      {
        tittle: "test3",
        message: "c",
        image: "../../../assets/novedades.jpg"
      },
      {
        tittle: "test",
        message: "",
        image: "../../../assets/novedades.jpg"
      }, 
    ],
    [
      {
        tittle: "test",
        message: "d",
        image: "../../../assets/novedades.jpg"
      },
      {
        tittle: "test",
        message: "e",
        image: "../../../assets/novedades.jpg"
      },
      {
        tittle: "test",
        message: "f",
        image: "../../../assets/novedades.jpg"
      }, 
    ]
   
  ]

  constructor() {

  }

}
