import { Router } from '@angular/router';
import { SignupComponent } from '../authentication/signup/signup.component';
import { Component, OnInit } from '@angular/core';
import { useAnimation } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    title = 'DashBoard Component'



  constructor() { }

  ngOnInit(): void {
  }

}
