import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users = [
    {
      username: 'ahmed@gmail.com',
      password: 'Pa$$w0rd!',
    },
  ];
  login: boolean = false;
  signup: boolean = false;
  loginForm = this.fb.group({
    email: [null],
    password: [null],
  });
  signupForm = this.fb.group({
    email: [null],
    password: [null],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }
  ngOnInit(): void {}
  signIn() {
    LoaderService.loader.next(true);
    let access_token: any = Math.floor(10 + Math.random() * 15);
    let user = this.users.find(
      (x) =>
        x.username === this.loginForm.controls['email'].value &&
        x.password === this.loginForm.controls['password'].value
    );
    if (user) {
      localStorage.setItem('access_token', access_token);
      this.router.navigate(['']);
      setTimeout(() => {
        LoaderService.loader.next(false);
      }, 1000);
    }
  }
  signUp() {
    const users: any = {
      username: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
    };
    LoaderService.loader.next(true);
    this.users.push(users);
    let access_token: any = Math.floor(10 + Math.random() * 15);
    let user = this.users.find(
      (x) =>
        x.username === this.signupForm.controls['email'].value &&
        x.password === this.signupForm.controls['password'].value
    );
    if (user) {
      localStorage.setItem('access_token', access_token);
      this.router.navigate(['']);
      setTimeout(() => {
        LoaderService.loader.next(false);
      }, 1000);
    }
  }
  signupBtn() {
    this.signup = !this.signup;
    if (this.login) {
      this.signup = true;
      this.login = false;
    }
  }
  loginBtn() {
    this.login = !this.login;
    if (this.signup) {
      this.signup = false;
      this.login = true;
    }
  }
}
