import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  brandName: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.brandName = this.data.info.brandName;
  }

}
