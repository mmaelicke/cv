import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Info} from './info.model';
import {Cv} from './cv.model';
import {Settings} from './settings.model';

interface StaticContents {
  cv: Cv;
  info: Info;
  settings: Settings;
}

@Injectable()
export class DataService {
  baseUrl = 'https://ng-cv-190c9.firebaseio.com';
  loaded = new BehaviorSubject(false);

  // loaded info data
  info: Info;
  cv: Cv;
  settings: Settings;


  constructor(private http: HttpClient) {}


  getData() {
    this.http.get(this.baseUrl + '/static.json').subscribe(
      (value: StaticContents) => {
        console.log(value);
        this.info = value.info;
        this.cv = value.cv;
        this.settings = value.settings;

        // emit a new loaded status
        this.loaded.next(true);
      },
      error => {
        console.log(error);

        // emit a new loaded status
        this.loaded.next(false);
      }
    );
  }
}
