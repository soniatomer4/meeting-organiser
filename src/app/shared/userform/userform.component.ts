import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  userform!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit() {
    this.userform = this.formbuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],

      role: ['', Validators.required],
    });
  }
}
