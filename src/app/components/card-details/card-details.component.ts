import { Component, Input, OnInit } from '@angular/core';
import { Card, Types, Attacks, Weaknesses, Resistances } from 'src/app/modelo/cards';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.less']
})
export class CardDetailsComponent implements OnInit {

  @Input() properties: Card;
  id: string;
  name: string;
  image: string;
  imageUrlHiRes: string;
  types: Array<Types>;
  attacks: Array<Attacks>;
  weaknesses: Array<Weaknesses>;
  resistances: Array<Resistances>
  
  constructor() {}

  ngOnInit(): void {
    this.id = this.properties.id;
    this.attacks = this.properties.attacks;
    this.types = this.properties.types;
    this.name = this.properties.name;
    this.image = this.properties.imageUrl;
    this.imageUrlHiRes = this.properties.imageUrlHiRes;
    this.weaknesses = this.properties.weaknesses;
    this.resistances = this.properties.resistances;
  }

}


