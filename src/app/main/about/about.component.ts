import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  birthday: Date;
  birthplace: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.birthday = this.data.info.birth;
    this.birthplace = this.data.info.birthPlace;
  }

}
