import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  name : string = '';
  password : string = '';
  comfirmPassword: string = '';
  termsConditions : boolean = false;


  valideatePassword(){
      window.alert('Not done yeat !');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
