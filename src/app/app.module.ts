import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuClienteComponent } from './components/menu-cliente/menu-cliente.component';
import { AcompanhamentoSolicitacaoComponent } from './components/acompanhamento-solicitacao/acompanhamento-solicitacao.component';
import { PrecoServicoComponent } from './components/preco-servico/preco-servico.component';
import { AguardarServicoComponent } from './components/aguardar-servico/aguardar-servico.component';
import { ServicoFinalizadoComponent } from './components/servico-finalizado/servico-finalizado.component';
import { SosComponent } from './components/sos/sos.component';
import { AvaliarServicoComponent } from './components/avaliar-servico/avaliar-servico.component';
import { ContinuarCadastroComponent } from './components/continuar-cadastro/continuar-cadastro.component';
import { CadastrarServicoComponent } from './components/cadastrar-servico/cadastrar-servico.component';
import { CadastrarPrecosComponent } from './components/cadastrar-precos/cadastrar-precos.component';
import { HomeMecanicoComponent } from './components/home-mecanico/home-mecanico.component';
import { BuscarServicosComponent } from './components/buscar-servicos/buscar-servicos.component';
import { ServicoEncontradoDialogComponent } from './components/servico-encontrado-dialog/servico-encontrado-dialog.component'
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocalizacaoComponent,
    OpcoesComponent,
    HomeClienteComponent,
    MenuClienteComponent,
    AcompanhamentoSolicitacaoComponent,
    PrecoServicoComponent,
    AguardarServicoComponent,
    ServicoFinalizadoComponent,
    SosComponent,
    AvaliarServicoComponent,
    ContinuarCadastroComponent,
    CadastrarServicoComponent,
    CadastrarPrecosComponent,
    HomeMecanicoComponent,
    BuscarServicosComponent,
    ServicoEncontradoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    GoogleMapsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
