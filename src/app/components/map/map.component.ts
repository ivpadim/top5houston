import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location';

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
  locations: Location[];

  constructor(private service : LocationService) {  }

  ngOnInit() {
    //Subscribe to value changes
    this.service.getLocations().subscribe(items => this.locations = items);    
  }

  getIconUrl(isOpen) {
    return isOpen ? "/assets/images/open_marker.png" : "/assets/images/close_marker.png";
  }

}
