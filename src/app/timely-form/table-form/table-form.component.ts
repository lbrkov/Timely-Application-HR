import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimelyTable } from 'src/app/shared/timely-table.model';
import { TimelyTableService } from 'src/app/shared/timely-table.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html'
})
export class TableFormComponent implements OnInit {

  constructor(public service:TimelyTableService) { }

  ngOnInit(): void {
  }

  putProjectName(projectName:any)
  {
    this.service.postProjectName().subscribe()
  }

}
