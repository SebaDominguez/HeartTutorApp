import { Component, OnInit } from '@angular/core';
import { Lista, ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage {

  listas: Lista [];


  constructor(private servicioService: ServicioService) { }


  remove(item) {
    this.servicioService.deleteLista(item.id);
  }

  ionViewWillEnter(){
    this.servicioService.getListas().subscribe(res => {
      this.listas = res;
    });
  }
  
}
