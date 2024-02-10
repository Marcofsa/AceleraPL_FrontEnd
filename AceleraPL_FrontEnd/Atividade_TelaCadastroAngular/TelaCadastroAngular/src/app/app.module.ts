import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }