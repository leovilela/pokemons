import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Card, Types } from 'src/app/modelo/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() properties: Card;
  id: string;
  name: string;
  image: string;
  imageUrlHiRes: string;
  types: Array<Types>;
  
  constructor() {}

  ngOnInit(): void {
    this.id = this.properties.id;
    this.types = this.properties.types;
    this.name = this.properties.name;
    this.image = this.properties.imageUrl;
    this.imageUrlHiRes = this.properties.imageUrlHiRes;
  }
}

