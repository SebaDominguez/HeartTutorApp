import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

export interface Lista {
  id?: string,
  emocion: string,
  descripcion: string,
  createdAt: number;

}



@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private listaCollection: AngularFirestoreCollection<Lista>; 
  private listas: Observable<Lista[]>;
  constructor(private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private authService: AuthService) {
    let currentUser = this.authService.getCurrentUser();
    if(this.afAuth.auth.currentUser) {
      let user = this.afAuth.auth.currentUser.uid;
    }
    
    if (currentUser) {
      this.refreshNotesCollection(currentUser.uid)
    }
  }
  refreshNotesCollection(userId) {
    this.listaCollection = this.db.collection('Usuarios').doc(userId).collection<Lista>('Sentimientos');
      this.listas = this.listaCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ... data};
        }))
      )
  }
  
  getListas() {
    return this.listas;
  }
  getListaId(id) {
    return this.listaCollection.doc<Lista>(id).valueChanges();
  }
  updateLista(lista) {
    return this.listaCollection.doc(lista.id).update(lista);
  }
  deleteLista(lista) {
    this.listaCollection.doc(lista.id).delete();
  }
  addToLista(lista) {
    return this.listaCollection.add(lista);
  }

}