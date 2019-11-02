import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule, SplitButtonModule} from 'primeng/primeng';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    SplitButtonModule,
    InputTextModule,
    MatCardModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
