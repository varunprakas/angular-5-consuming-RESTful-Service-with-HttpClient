import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';


import { Survey } from './survey';
import { SurveyService } from './survey.service';



@NgModule({
  declarations: [
    Survey
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  	SurveyService
  ],
  bootstrap: [Survey]
})
export class AppModule { }
