import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { TimelyTable } from 'src/app/shared/timely-table.model';
import { TimelyTableService } from 'src/app/shared/timely-table.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html'
})
export class TableFormComponent implements OnInit {

  constructor(public service:TimelyTableService){
  }
  formData = new TimelyTable();

  ngOnInit(): void {
  };


  onButtonClick(form:NgForm){
      this.service.postForm().subscribe(
        (result) => {
          console.log(result);
        }
        
      );
    }
  // resetform(form:NgForm){
  //     form.form.reset();
  //     this.service.formData = new TimelyTable();
  // }

}
