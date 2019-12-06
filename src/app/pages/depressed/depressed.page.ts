import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-depressed',
  templateUrl: './depressed.page.html',
  styleUrls: ['./depressed.page.scss'],
})
export class DepressedPage implements OnInit {

  inputText:string;
  key:string = 'Deprimido'

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
