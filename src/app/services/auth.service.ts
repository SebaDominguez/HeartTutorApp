import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicioService } from './servicio.service';
import { NavController, LoadingController } from '@ionic/angular';


export class User {
  id?:string;
  email: string;
  password: string;

}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any =false;

  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>
  
  constructor(private nav:NavController,  private db:AngularFirestore,
    private afAuth: AngularFireAuth) {
      afAuth.authState.subscribe(user=>(this.isLogged = user))
      this.userCollection = db.collection<User> ('users');
      this.users = this.userCollection.snapshotChanges().pipe(
        map (actions => {
          return actions.map (a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ... data};
          })
        })
      )
    }

    registerUser(value) {
      return new Promise<any>((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(
          res => {
            console.log("User id after reigstration = "+res.user.uid);
            let user: User = {
              email: value.email,
              id: res.user.uid,
              password: value.name
            };
            this.nav.navigateBack('login'); 
          }, err => {
            reject(err);
          }
        )
      })
    }

    login(value) {
      return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
    }

    logout() {
      firebase.auth().signOut();
    }

    getCurrentUser() {
      if(firebase.auth().currentUser) {
        return firebase.auth().currentUser;
      } else {
        return null;
      }
    }
  }