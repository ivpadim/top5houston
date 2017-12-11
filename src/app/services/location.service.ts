import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Location } from '../models/location'

@Injectable()
export class LocationService {
  locations: Observable<Location[]>;

  constructor(public af: AngularFireDatabase) { 
     this.locations =  this.af.list<Location>('locations').valueChanges();    
  }

  getLocations(){
    return this.locations;
  }

}
