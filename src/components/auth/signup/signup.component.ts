import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  created: boolean;
  loading: boolean;
  private user: UserModel;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      company_type: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: this.fb.group({
        pwd: ['', [Validators.required, Validators.minLength(8)]],
        confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
      }),
      conditions: ['', Validators.requiredTrue]
    });
  }

  ngOnInit() {
    this.created = false;
    this.loading = false;
  }

  /* === #FormControl Error Getters === */
  get company() {
    return this.signupForm.get('company_type');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get conditions() {
    return this.signupForm.get('conditions');
  }

  createAccount() {
    if (this.signupForm.valid) {
      this.loading = true;
      this.user = this.signupForm.value;
      console.log(this.user);

      setTimeout(() => {
        this.created = true;
        this.loading = false;
      }, 3000);
    }
  }
}
