import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelyFormComponent } from './timely-form/timely-form.component';
import { TimelyTableService } from './shared/timely-table.service';
import { TableFormComponent } from './timely-form/table-form/table-form.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelyFormComponent,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
