import { Injectable } from '@angular/core';
import { TimelyTable } from './timely-table.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable({
  providedIn: 'root'
})
export class TimelyTableService {
  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    }

  readonly APIUrl = 'https://localhost:7280/api/Times'
  constructor(private http:HttpClient) { }

  formData:TimelyTable = new TimelyTable();

  postProjectName()
  {
    return this.http.post(this.APIUrl,this.formData.projectName,this.httpOptions);
  }


}
