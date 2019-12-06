import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-happy',
  templateUrl: './happy.page.html',
  styleUrls: ['./happy.page.scss'],
})
export class HappyPage{

  databaseObj: SQLiteObject;
  name_model: string = "";
  readonly table_name: string = "Persona";

  constructor(
    private platform: Platform,
    private sqlite: SQLite){}
 
  insertRow() {
    if (!this.name_model.length) {
      alert("Enter Name");
      return;
    }
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', [])
      .then(() => {
        alert('Row Inserted!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

 
 
}