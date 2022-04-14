import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : string = 'student';
  password : string ='student';

  users: string[] = [];
  passwords: string[] = [];

  providedUser = '';
  providedPassword =  '';

  isLoginCorrect : boolean = false;



  constructor( private router: Router) { }

 
  onSubmit(){
    if( ( this.providedPassword === this.password) &&
        ( this.providedUser === this.user)){
          this.router.navigate(['/defaultComponent'])
        }
    else{
      window.alert('Wrong user name or password !')
          }
  }

  ngOnInit(): void {
  }

}
