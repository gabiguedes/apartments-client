import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { UserNoobComponent } from './components/user-noob/user-noob.component';
import { MatButtonModule } from "@angular/material/button";
import { AdminSupremeComponent } from './components/admin-supreme/admin-supreme.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserNoobComponent,
    AdminSupremeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
