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


  valideateRegisterForm(){
    this.validateName();
    this.validateEmail();
    this.validatePassword();
    if(this.termsConditions === false){
      window.alert('Please heck your term of service checkBox');
    }
      
  }

  validateEmail(){
    if( this.email === ''){
      window.alert('Email is required !');
    }
  }

  validateName(){
    if(this.name === ''){
      window.alert('Name can not be Empty !');
    }
  }

  validatePassword(){
    if(this.password != this.comfirmPassword){
      window.alert('Passwords are not the same ');
    }else{
      if(this.password === ''){
        window.alert('password can not be empty!');
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
