import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { race } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginform!: FormGroup;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private authservice: AuthService
  ) {}
  hide = true;
  ngOnInit() {
    this.loginform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onsubmit() {
    console.log(this.loginform.value);
    this.authservice.getSigninStatus(this.loginform.value);
  }

  submit(data: any) {
    // this.authservice.loginUser(data).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log('An error occurred:', error);
    //   }
    // );
    this.authservice.usersignin(data);
  }
  // signin(data: any) {
  //   this.authservice.usersignin(data).subscribe((result) => {
  //     console.log(data);
  //   });
  // }
}
