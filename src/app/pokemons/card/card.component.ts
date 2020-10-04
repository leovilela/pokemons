import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() properties: any;

  constructor() {}

  ngOnInit(): void {}
}

