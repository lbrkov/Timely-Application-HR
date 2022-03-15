import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    if(this.service.formData.timeId==0)
    {
      this.insertTimeTable(form);
    }
    else{
      this.updateTimeTable(form);
    }
    }

    insertTimeTable(form:NgForm)
    {
      this.service.postForm().subscribe(
        (result) => {
          this.resetform(form);
          this.service.refreshForm();
          console.log(result);
        }
        
      );
    }
    updateTimeTable(form:NgForm)
    {
      this.service.putForm().subscribe(
        (result) => {
          this.resetform(form);
          this.service.refreshForm()
          console.log(result);
        }
      );
    }
    patchstoptime(form:NgForm){
      this.service.patchStopTime().subscribe(
        (result) => {
          this.resetform(form);
          this.service.refreshForm()
          console.log(result);
        }
      )
    }
    resetform(form:NgForm){
      form.form.reset();
      this.service.formData = new TimelyTable();
  }

}
