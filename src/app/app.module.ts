import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MatchComponent } from './components/match/match.component';
import { TopicComponent } from './components/topic/topic.component';
import { DrawComponent } from './components/draw/draw.component';
import { ResultsComponent } from './components/results/results.component';
import { ProcessingComponent } from './components/processing/processing.component';
import { SocketService } from './services/socket.service';
import { SocketGuard } from './guards/socket.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LobbyComponent,
    MatchComponent,
    TopicComponent,
    DrawComponent,
    ResultsComponent,
    ProcessingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    SocketService,
    SocketGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
