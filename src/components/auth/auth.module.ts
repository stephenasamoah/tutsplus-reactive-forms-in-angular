import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent, AuthComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [
    SignupComponent
  ]
})
export class AuthModule {
}
