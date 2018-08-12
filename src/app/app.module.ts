import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormDetailComponent } from './form-detail/form-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FormDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
