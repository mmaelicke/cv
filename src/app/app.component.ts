import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataLoaded = false;

  constructor(private data: DataService) {
    this.data.getData();

    // subscribe to loaded
    this.data.loaded.subscribe(
      (status: boolean) => {
        this.dataLoaded = status;
    });

  }

  ngOnInit() {

  }
}
