import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) {}

  
//  onLogout(){ 
  //  console.log('Logged out');
    //this.afAuth.auth.signOut();
    //this.router.navigateByUrl('/login');
  //}

//}


  onLogout(){ 
    console.log('Logged out');
    this.authSvc.logout();
    this.router.navigateByUrl('/login');
  }

}
