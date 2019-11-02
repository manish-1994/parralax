import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {auth} from 'firebase';
import * as firebase from 'firebase';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
/*
import ScrollOut from 'scroll-out';
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   uid: Observable<any>;

  constructor(public afauth: AngularFireAuth, ) {

   /* ScrollOut({
      /!* options *!/
    });*/


// When the user scrolls the page, execute myFunction
      window.onscroll = function() {myFunction(); };

      function myFunction() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('myBar').style.width = scrolled + '%';
    }


  }


}

