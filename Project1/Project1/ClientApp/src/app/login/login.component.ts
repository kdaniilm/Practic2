import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private baseUrl: string;
  invalidLogin: boolean;

  constructor(private router: Router, private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    const payload = form.value;


    this.httpClient.post(this.baseUrl + 'auth/login', payload).subscribe(res => {
      const token = (<any>res).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/counter']);
    },
      error => {
        this.invalidLogin = true;
      }
    );
  }

}
