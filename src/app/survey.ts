import {Component, Injectable} from '@angular/core'
import {ISurvey} from './ISurvey'

import {SurveyService} from './survey.service';

@Component({
  selector: 'survey',
  template: `
    <div>
      <h2>Question : </h2>
      <div *ngIf="MySurvey && MySurvey.length">
      <div *ngFor="let survey of MySurvey; let idx = index"><br/>
        <div>{{survey.question}}</div>
        <div *ngFor="let choice of survey.choices">
          <input type="radio" name="radioGroup{{idx}}"/>{{choice}}
        </div>
      </div>
      </div>
    </div>
  `
})

export class Survey implements OnInit{

	MySurvey : ISurvey[] = [];
	constructor(private _surveyService: SurveyService){

	}

	ngOnInit(){
    this._surveyService.getSurveyQuestion().subscribe(data => {
        console.log(data);
        this.MySurvey = data;
        }, err => {
          console.log(err);
        });
  	}
  
}