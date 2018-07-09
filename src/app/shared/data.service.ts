import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Info} from './info.model';

@Injectable()
export class DataService {
  baseUrl = 'https://ng-cv-190c9.firebaseio.com';
  loaded = new BehaviorSubject(false);

  // loaded info data
  info: Info;


  constructor(private http: HttpClient) {}


  getInfo() {
    this.http.get(this.baseUrl + '/info.json').subscribe(
      (value: Info) => {
        console.log(value);
        this.info = value;

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
