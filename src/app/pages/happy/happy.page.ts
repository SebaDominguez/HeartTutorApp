import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.page.html',
  styleUrls: ['./happy.page.scss'],
})
export class HappyPage implements OnInit {


  inputText:string;
  key:string = 'Feliz'

  constructor(private storage: Storage) { }

  postData(){
    this.storage.set(this.key, this.inputText);
    console.log (this.key, this.inputText)
  }

  getData(){
    this.storage.get(this.key).then((val) => {
      console.log('Tu descripción es: ', val);
    });
  }

  

  ngOnInit() {

  }
  

}
