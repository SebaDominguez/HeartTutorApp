import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';
import { User } from '../../services/auth.service';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  user: User = new User();
  cpassword: string ="";

  constructor(private authSvc: AuthService, private router: Router, private nav: NavController) { }

  
  

  ngOnInit() {}
  
  async onRegister(){

    const user = await this.authSvc.registerUser(this.user);
    if (this.user.password!==this.cpassword){
      return console.error("Passwords don't match")
    }
    
    console.log('Succesfully created user')
    this.nav.navigateBack('login');
    }
}


