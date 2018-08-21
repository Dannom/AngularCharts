import { Component, OnInit,ElementRef } from '@angular/core';
import { userDataService } from '../userData.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  fields=this.data.arrOfFields;
  chartName=this.data.chartName;

  // get the user data from the service
  xValues:string[]=this.data.xValues;
  yValues:string[]=this.data.yValues;

  constructor( private data: userDataService) { 
  }

  onChartName(){
    this.data.setChartName();
  }

  onDone(){
    this.data.setValues();
  }
  
  onAdd(){
    this.data.addFields();

  }

  onDel(){
    this.data.onDelFields();
  }

  ngOnInit() {

  }

}
