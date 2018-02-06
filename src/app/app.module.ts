import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import {NgsRevealModule} from 'ng-scrollreveal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    NgsRevealModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
