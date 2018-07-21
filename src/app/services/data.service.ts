import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
  private serviceURL = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
  constructor(private http: HttpClient) {
  }

  getUser(app): Observable<any[]> {
    return this.http.get<any[]>(this.serviceURL);
  }

}
