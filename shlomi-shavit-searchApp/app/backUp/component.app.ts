import { Component } from '@angular/core';

/*-------- Tapets class --------*/
export class Tapets{
  name: string;
  shortname: string;
  description: string;
}
/*-------- /Tapets class --------*/

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: ["../css/app.css"]
})

/*-------- AppComponent class --------*/
export class AppComponent {
  name: string;
  tapets: any;

  onClick(myItem, myElement){
    this.name = myItem.tapetName;
    myElement.style.backgroundColor="#FECE4E";
    console.log();
      /*console.log(e.target.innerHTML);
      this.name = e.target.innerHTML;*/
  }

  addTapet(value){
    if( value != '' ){
      this.tapets.push({
        tapetName: value,
        category: 'No category'
      })
    }
  }

  keyUpEvent(keyArr){
    console.log(keyArr.key);
  }

  constructor(){
    this.name = 'Shlomi Shavit';
    this.tapets = [
      {
        tapetName: 'New-york skyline',
        category: 'Cities'
      }, {
        tapetName: 'deep forest',
        category: 'Nature'
      }, {
        tapetName: 'Bacteria',
        category: 'Micro'
      }
    ]
  }
}
/*-------- /AppComponent class --------*/

/*-------- Tapets categories object --------*/
var TAPETS: Tapets[] = [
  {
    "name":"Cities",
    "shortname":"city-main-img",
    "description":"some city tapets description"
  }, {
    "name":"Nature",
    "shortname":"nature-main-img",
    "description":"some nature tapets description"
  }, {
    "name":"Micro",
    "shortname":"micro-main-img",
    "description":"some micro tapets description"
  }, {
    "name":"Space",
    "shortname":"space-main-img",
    "description":"some space tapets description"
  }, {
    "name":"3D Tapets",
    "shortname":"3dTapets-main-img",
    "description":"some 3d tapets description"
  }, {
    "name":"Art Tapets",
    "shortname":"art-tapet-main-img",
    "description":"some art tapets description"
  }, {
    "name":"Simple Tapets",
    "shortname":"simple-tapet-main-img",
    "description":"some simple tapets description"
  }
]
