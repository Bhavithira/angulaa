import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  imgUrl = '../../assets/images/cats.jpg';
  constructor() { }

  ngOnInit() {
  }

}
