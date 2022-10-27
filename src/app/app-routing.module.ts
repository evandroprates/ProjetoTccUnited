import { BuscarServicosComponent } from './components/buscar-servicos/buscar-servicos.component';
import { HomeMecanicoComponent } from './components/home-mecanico/home-mecanico.component';
import { CadastrarPrecosComponent } from './components/cadastrar-precos/cadastrar-precos.component';
import { CadastrarServicoComponent } from './components/cadastrar-servico/cadastrar-servico.component';
import { ContinuarCadastroComponent } from './components/continuar-cadastro/continuar-cadastro.component';
import { AvaliarServicoComponent } from './components/avaliar-servico/avaliar-servico.component';
import { SosComponent } from './components/sos/sos.component';
import { AguardarServicoComponent } from './components/aguardar-servico/aguardar-servico.component';
import { PrecoServicoComponent } from './components/preco-servico/preco-servico.component';
import { AcompanhamentoSolicitacaoComponent } from './components/acompanhamento-solicitacao/acompanhamento-solicitacao.component';
import { MenuClienteComponent } from './components/menu-cliente/menu-cliente.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { LoginComponent } from './components/login/login.component';
import { ServicoFinalizadoComponent } from './components/servico-finalizado/servico-finalizado.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "localizacao", component: LocalizacaoComponent },
  { path: "opcoes", component: OpcoesComponent },
  { path: "home-cliente", component: HomeClienteComponent },
  { path: "menu-cliente", component: MenuClienteComponent },
  { path: "acompanhamento-solicitacao-cliente", component: AcompanhamentoSolicitacaoComponent },
  { path: "preco-servico", component: PrecoServicoComponent },
  { path: "aguardar-servico", component: AguardarServicoComponent },
  { path: "servico-finalizado", component: ServicoFinalizadoComponent },
  { path: "sos", component: SosComponent },
  { path: "avaliar-servico", component: AvaliarServicoComponent },
  { path: "continuar-cadastro", component: ContinuarCadastroComponent },
  { path: "cadastrar-servico", component: CadastrarServicoComponent },
  { path: "cadastrar-precos", component: CadastrarPrecosComponent },
  { path: "home-mecanico", component: HomeMecanicoComponent },
  { path: "buscar-servico", component: BuscarServicosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
