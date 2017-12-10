import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
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

}