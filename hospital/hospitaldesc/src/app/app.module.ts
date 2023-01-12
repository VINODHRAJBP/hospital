import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HeaderComponent } from './header/header.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    HeaderComponent,
<<<<<<< HEAD
||||||| f4a1574
<<<<<<< HEAD
||||||| a193772
=======
>>>>>>> 9f2a9f74ac56d2ea33122087a270fe444dd73f16
    HeaderComponent
<<<<<<< HEAD
||||||| bfa1a22
    
=======
>>>>>>> 251f9f5398b445195cdc7df463c96964642abed7
>>>>>>> 9f2a9f74ac56d2ea33122087a270fe444dd73f16
=======
<<<<<<< HEAD
   

=======
>>>>>>> 8c2d1c07eea8dedb3bd9a3a7b1fd5cde810d6bf4
>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
=======

>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
