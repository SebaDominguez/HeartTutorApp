import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-angry',
  templateUrl: './angry.page.html',
  styleUrls: ['./angry.page.scss'],
})
export class AngryPage implements OnInit {

  inputText:string;
  key:string = 'Enojado'

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
