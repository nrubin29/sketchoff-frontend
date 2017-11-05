import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { ResultsPacket } from '../../packets/results.packet';
import { NewGamePacket } from '../../packets/new-game.packet';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  players: PlayerData[];

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.players = (this.socketService.lastPacket as ResultsPacket).players;
  }

  playAgain() {
    this.socketService.emit(new NewGamePacket());
  }
}
