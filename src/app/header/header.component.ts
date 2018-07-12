import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.imagePath = this.data.settings.headerImageUrl;
  }

}
