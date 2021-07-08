import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<Data[] | any> {
    return this.http.get(this.dataUrl);
  }

}
