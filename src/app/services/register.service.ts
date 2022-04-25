import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  users =  new Array<User>();
  isFreeUserName: boolean = true;
 
  constructor(private router: Router) { 
    this.users.push(new User('new', 'new'))
  }

  checkUser(userName: string){
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].name.includes(userName)){
        console.log('loking for a student' + this.users.length);
        window.alert("User -> " + userName + " already exists")
        this.isFreeUserName = false;
      }
    }
  }

  addUser( userName: string, userPassword: string){
    this.checkUser(userName);

    if(this.isFreeUserName){
      this.users.push(new User(userName, userPassword));
      window.alert('Added New User ' + userName );
      this.router.navigate([''])
    }
  }

  getUsers(){
    return this.users;
  }
}
