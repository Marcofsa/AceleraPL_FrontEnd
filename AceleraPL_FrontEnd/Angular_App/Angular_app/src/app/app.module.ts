import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    EmitterOneComponent,
    EmitterTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
