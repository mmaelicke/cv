import {Component, Input, OnInit} from '@angular/core';
import {Entry} from '../../../shared/cv.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() contents: Entry[];
  @Input() collapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
