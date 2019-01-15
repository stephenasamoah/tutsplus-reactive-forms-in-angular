import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../components/auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { AuthComponent } from '../components/auth/auth.component';

// ***************************
// #Routes
// ***************************/
export const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' }
    ]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
