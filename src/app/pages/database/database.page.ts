import { Component, OnInit } from '@angular/core';
import { Lista, ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  listas: Lista [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {

    this.servicioService.getLista().subscribe(res => {
      this.listas = res;
    });

  }

  remove(item) {
    this.servicioService.removeLista(item.id);
  }

}
