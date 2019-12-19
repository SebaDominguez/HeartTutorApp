import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


export class User {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged : any = false;
  constructor(public afAuth: AngularFireAuth) {

    afAuth.authState.subscribe (user => (this.isLogged = user));
  }


    //login

    async onLogin (user:User) {
      try {
        return await this.afAuth.auth.signInWithEmailAndPassword(
          user.email,
          user.password
          );
      } catch (error){

        console.log('Error on login', error)

 

      }
    }

    //register

    async onRegister (user:User) {

      try {
        return await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
        
      } catch (error) {
        console.log('Error on register', error)
        
      }

    }

    
  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }

  }
   }
