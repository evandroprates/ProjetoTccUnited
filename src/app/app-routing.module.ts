import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "localizacao", component: LocalizacaoComponent },
  { path: "opcoes", component: OpcoesComponent },
  { path: "home-cliente", component: HomeClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
