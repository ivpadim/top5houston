import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  //Focus the map to this area
  mapLat = 29.75;
  mapLng = -95.36;
  //Array of locations fetched from firebase
  locations: any[];

  constructor( public af: AngularFireDatabase) {
    //Subscribe to value changes
    af.list('locations').valueChanges().subscribe(items => {
      this.locations = items;
    });
  }

  ngOnInit() {
  }

  getIconUrl(isOpen) {
    return isOpen ? "/assets/images/open_marker.png" : "/assets/images/close_marker.png";
  }

}
