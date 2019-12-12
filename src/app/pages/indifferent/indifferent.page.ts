import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Lista, ServicioService } from '../../services/servicio.service';


@Component({
  selector: 'app-indifferent',
  templateUrl: './indifferent.page.html',
  styleUrls: ['./indifferent.page.scss'],
})
export class IndifferentPage implements OnInit {


  listas: Lista = {

    emocion: 'Indiferente',
    descripcion:'',
    createdAt: new Date().getTime()
  };

  listasId = null;
  
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: ServicioService,
    private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.listasId = this.route.snapshot.params['id'];
    if (this.listasId)  {
      this.loadTodo();
    }
  }
 
  
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getListaId(this.listasId).subscribe(res => {
      loading.dismiss();
      this.listas = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.listasId) {
      this.todoService.updateLista(this.listas, this.listasId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.todoService.addToLista(this.listas).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
 
}