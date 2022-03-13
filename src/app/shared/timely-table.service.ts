import { Injectable } from '@angular/core';
import { TimelyTable } from './timely-table.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TimelyTableService {
  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    }

  readonly APIUrl = environment.apiHost
  constructor(private http:HttpClient) { }

  formData:TimelyTable = new TimelyTable();

  postForm(){
   return this.http.post(`${this.APIUrl}`,this.formData);
  }


}
