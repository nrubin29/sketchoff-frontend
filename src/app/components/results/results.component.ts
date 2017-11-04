import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { ResultsPacket } from '../../packets/results.packet';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  player1: PlayerData;
  player2: PlayerData;

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    let packet = this.socketService.lastPacket as ResultsPacket;
    this.player1 = packet.player1;
    this.player2 = packet.player2;
  }

  playAgain() {
    // TODO: Emit packet to rejoin lobby.
  }
}
