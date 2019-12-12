import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Lista {

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

  constructor (db: AngularFirestore) {

    this.listaCollection = db.collection<Lista>('Emociones')

    this.listas = this.listaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }
  
  getLista() {
    return this.listas;
  }
 
  getListaId(id) {
    return this.listaCollection.doc<Lista>(id).valueChanges();
  }
 
  updateLista(todo: Lista, id: string) {
    return this.listaCollection.doc(id).update(todo);
  }
 
  addToLista(todo: Lista) {
    return this.listaCollection.add(todo);
  }
 
  removeLista(id) {
    return this.listaCollection.doc(id).delete();
  }




}
