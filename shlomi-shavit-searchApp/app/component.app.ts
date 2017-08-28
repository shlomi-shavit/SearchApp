import { Component } from '@angular/core';
import { TapetItemComponent } from './component.tapet-item';

/*-------- Tapets class --------*/
export class Tapets{
  name: string;
  shortname: string;
  description: string;
}
/*-------- /Tapets class --------*/

@Component({
  selector: 'categories',
  templateUrl: './partials/app.html',
  styleUrls: ['../css/app.css']
})

/*-------- AppComponent class --------*/
export class AppComponent {
  tapetsCat = TapetsCategories;
  currentTapet = Tapets;

  // show details
  showTapetDetails(itemArr){
    this.currentTapet = itemArr;
  }

  // remove show details
  removeDetailsTapet(itemArr) {
    this.currentTapet = itemArr;
    itemArr = '';
  }
}
/*-------- /AppComponent class --------*/

/*-------- Tapets categories object --------*/
var TapetsCategories: Tapets[] = [
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
/*-------- /Tapets categories object --------*/


/*-------- Tapet categorie item --------*/
// Space
// Nature
// ect...
/*-------- Tapet categorie item --------*/
