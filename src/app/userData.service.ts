import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userDataService {

  // variable that will contian the number of fields as an array
  arrOfFields=[''];


  input;
  // var that will contain the name of the chart, default to "My Chart"
  chartName="My Chart";

  // vars to get the data inputs
  xInputs;
  yInputs;
  xValues=[''];
  yValues=[''];


  
  setChartName(){
    this.input=document.querySelector('.chartName');
    this.chartName=this.input.value;
  }
  
  addFields(){
    this.xValues.push('');
    this.arrOfFields.push('');
  }

  onDelFields(){
    if (this.arrOfFields.length > 1){
      this.arrOfFields.splice(this.arrOfFields.length-1,1);
      this.xValues.splice(this.xValues.length-1,1);
      this.yValues.splice(this.yValues.length-1,1);
    }

  }


  // Function to get two arrays, one for the values of x axis, and one for y axis

  setValues() {
    this.xValues = [];
    this.xInputs = document.querySelectorAll('.xAxis');
    for (var i=0;i<this.xInputs.length;i++){
      this.xValues[i]=this.xInputs[i].value;
    }
    this.yValues = [];
    this.yInputs = document.querySelectorAll('.yAxis');
    this.yInputs.forEach(element => {
      this.yValues.push(element.value);
    });

  }

  constructor() {

  }
}
