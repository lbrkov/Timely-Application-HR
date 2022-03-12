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

  constructor() { }

  ngOnInit(): void {
  }

}
