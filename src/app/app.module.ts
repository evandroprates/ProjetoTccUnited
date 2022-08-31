import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocalizacaoComponent,
    OpcoesComponent,
    HomeClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
