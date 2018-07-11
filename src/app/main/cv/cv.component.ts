import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Entry} from '../../shared/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  education: Entry[];
  work: Entry[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.education = this.data.cv.education;
    this.work = this.data.cv.work;
  }

}
