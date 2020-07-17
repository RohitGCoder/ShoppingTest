import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './pages/home/movies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private messageSource = new BehaviorSubject('0');
  currentMessage = this.messageSource.asObservable();

  // tslint:disable-next-line:variable-name
  //private _getUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) { }

  // getItems(){
  //   return this.http.get<Items[]>(this._getUrl);
  // }

   changeMessage(count: any) {
    this.messageSource.next(count);
  }
}
