import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AddFormComponent } from './add-form/add-form.component';
import { ViewResultComponent } from './view-result/view-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ViewResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
