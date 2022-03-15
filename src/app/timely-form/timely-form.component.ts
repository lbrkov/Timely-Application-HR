import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimelyTable } from '../shared/timely-table.model';
import { TimelyTableService } from '../shared/timely-table.service';

@Component({
  selector: 'app-timely-form',
  templateUrl: './timely-form.component.html',
})
export class TimelyFormComponent implements OnInit {

  constructor(public service: TimelyTableService) { }

  myStartDate:any;
  myEndDate:any;

  diffHours:any;
  diffMinutes:any;
  diffSeconds:any;

  finaleduration:any;

  ngOnInit(): void {
    this.service.refreshForm();
  }
  changeForm(selected:TimelyTable){
    this.service.formData = Object.assign({},selected);
  }

  onDelete(id:number)
  {
    this.service.deleteForm(id).subscribe(
      (result) => {
        this.service.refreshForm()
        console.log(result);
      }
    )
  }
  calculateDuration(startTime:string,stopTime:string)
  {
    this.myStartDate = new Date(startTime).getTime();
    this.myEndDate = new Date(stopTime).getTime();

    this.diffHours = Math.floor((Math.abs(this.myEndDate - this.myStartDate) / (1000 * 60 * 60) % 24));
    this.diffMinutes = Math.floor((Math.abs(this.myEndDate - this.myStartDate) / (1000 * 60) % 60));
    this.diffSeconds = Math.floor((Math.abs(this.myEndDate - this.myStartDate) / (1000) % 60));

    this.finaleduration = `${this.diffHours} h : ${this.diffMinutes} min : ${this.diffSeconds} s`;
    this.service.patchDuration(this.finaleduration).subscribe(
      (result) => {
        this.service.refreshForm();
        console.log(result);
      }
    )

  }
}

