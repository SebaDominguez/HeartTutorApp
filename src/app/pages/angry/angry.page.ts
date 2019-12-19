import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController,AlertController, LoadingController } from '@ionic/angular';
import { Lista, ServicioService } from '../../services/servicio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-angry',
  templateUrl: './angry.page.html',
  styleUrls: ['./angry.page.scss'],
})
export class AngryPage implements OnInit {

  listas: Lista = {

    emocion: 'Enojado',
    descripcion:'',
    createdAt: new Date().getTime()
  };

  constructor(private notesService: ServicioService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private nav: NavController) {

    if(this.authService.getCurrentUser() == null) {
      this.router.navigate(['/home']);
    }
    }

    ngOnInit() {
    }
    async saveTodo() {
      const loading = await this.loadingCtrl.create({
        message: "Se está registrando tu emoción",
        spinner: 'crescent',
        });
        loading.present();
        if(this.listas.id == null) {
          //save the new note
          this.listas.createdAt = new Date().getTime();
          this.notesService.addToLista(this.listas).then((noteDoc) => {
            // this returns the new note document created in the FirebaseDB
            this.listas.id = noteDoc.id;
            loading.dismiss();
            this.nav.navigateBack('home');
          });
        } else {
          this.notesService.updateLista(this.listas);
          loading.dismiss();
          this.nav.navigateBack('home');
        }
      }
}