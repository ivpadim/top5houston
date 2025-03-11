import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
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
