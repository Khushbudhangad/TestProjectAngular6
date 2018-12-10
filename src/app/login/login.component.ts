import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = FormGroup;
  invalidLogin = false;
  login = new Login();
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    event.preventDefault();
    console.log(event);
    const userName = this.login.userName;
    const password = this.login.password;
    console.log(userName , password);
    // this.authService.getUserDetails(userName, password);

    this.submitted = true;
    debugger;
    if (form.valid) {
    if (userName === 'keshav' && password === '123') {
        console.log('Login SucessFully');
        this.router.navigate(['welcome']);
    } else {
      this.invalidLogin = true;
    }
  }

  }

 
}
