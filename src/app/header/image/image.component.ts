import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Info} from '../../shared/info.model';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() path: string;
  @Input() height = '400px';

  // loaded data
  info: Info;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.info = this.data.info;
  }

}
