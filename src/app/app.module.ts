import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './components/map/map.component';
import {ListComponent} from './components/list/list.component';
import { SearchPipe } from './components/list/pipes/search.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi1kuulGPzqFUNs4ijs-frgcpE1Wy9neo'
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
