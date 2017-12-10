import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { AppComponent } from './components/app.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
