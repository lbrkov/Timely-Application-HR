import { Injectable } from '@angular/core';
import { TimelyTable } from './timely-table.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';


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
  listofTime:TimelyTable[];

  postForm(){
   return this.http.post(`${this.APIUrl}`,this.formData);
  }

  refreshForm(){
    lastValueFrom(this.http.get(`${this.APIUrl}`)).then(res => this.listofTime = res as TimelyTable[]);
  }
  putForm(){
    return this.http.put(`${this.APIUrl}/${this.formData.timeId}`,this.formData);
   }
   patchStopTime()
   {
     return this.http.patch(`${this.APIUrl}/${this.formData.timeId}`,this.formData.stopTime);
   }

   deleteForm(id:number)
   {
     return this.http.delete(`${this.APIUrl}/${id}`)
   }

}
