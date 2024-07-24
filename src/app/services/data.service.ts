import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrlEn = 'data-en.json';
  private dataUrlFr = 'data-fr.json';

  constructor(private http: HttpClient) {}

  getData(language: 'en' | 'fr'): Observable<DataModel> {
    const url = language === 'en' ? this.dataUrlEn : this.dataUrlFr;
    return this.http.get<DataModel>(url);
  }
}
