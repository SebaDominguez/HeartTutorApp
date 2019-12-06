import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.page.html',
  styleUrls: ['./sad.page.scss'],
})
export class SadPage implements OnInit {

  inputText:string;
  key:string = 'Triste'

  constructor(private storage: Storage) { }

  postData(){
    this.storage.set(this.key, this.inputText);
    console.log (this.key, this.inputText)
  }

  getData(){
    this.storage.get(this.key).then((val) => {
      console.log('Estas ', this.key, 'y el motivo es:', val);
    });
  }
  

  ngOnInit() {
  }

}
