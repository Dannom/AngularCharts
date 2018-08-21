import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { element } from 'protractor';
import { Router, Route, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Params } from '@angular/router/src/shared';
import { userDataService } from 'src/app/userData.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

    type;
    data = {
      labels: this.userData.xValues,
      datasets: [
        {
          label: this.userData.chartName,
          data: this.userData.yValues,
          backgroundColor:[
            'blue'
          ]
        }
      ]
    };
    options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
      }
    };


  constructor(
    private router: ActivatedRoute, private userData:userDataService) {
  }


  ngOnInit() {

    this.router.params.subscribe((val : Params) => {
      this.type=val.graphType;
      
      
    });
    
  }
}
