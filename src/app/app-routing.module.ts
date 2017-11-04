import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MatchComponent } from './components/match/match.component';
import { TopicComponent } from './components/topic/topic.component';
import { DrawComponent } from './components/draw/draw.component';
import { ResultsComponent } from './components/results/results.component';
import { SocketGuard } from './guards/socket.guard';
import { ProcessingComponent } from './components/processing/processing.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lobby', component: LobbyComponent, canActivate: [SocketGuard]},
  {path: 'match', component: MatchComponent, canActivate: [SocketGuard]},
  {path: 'topic', component: TopicComponent, canActivate: [SocketGuard]},
  {path: 'draw', component: DrawComponent, canActivate: [SocketGuard]},
  {path: 'processing', component: ProcessingComponent, canActivate: [SocketGuard]},
  {path: 'results', component: ResultsComponent, canActivate: [SocketGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
