import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    ViewDetailComponent,
    MaxLengthPipe,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
