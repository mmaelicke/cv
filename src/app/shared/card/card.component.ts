import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() collapsed = false;
  @Input() header: string;
  @Input() headerBg = 'bg-light';
  @Input() bodyBg = 'bg-default';

  constructor() { }

  ngOnInit() {
  }

}
