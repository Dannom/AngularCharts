import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { BarComponent } from 'src/app/bar/bar.component';
import { HomeComponent } from 'src/app/home/home.component';
import { userDataService } from 'src/app/userData.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graph/:graphType', component: BarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartModule
  ],
  providers: [userDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
