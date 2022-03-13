import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimelyTable } from '../shared/timely-table.model';
import { TimelyTableService } from '../shared/timely-table.service';

@Component({
  selector: 'app-timely-form',
  templateUrl: './timely-form.component.html',
})
export class TimelyFormComponent implements OnInit {

  constructor(public service: TimelyTableService) { }

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

}
