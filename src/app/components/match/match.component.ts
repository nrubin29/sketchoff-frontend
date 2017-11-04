import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { MatchPacket } from '../../packets/match.packet';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  opponent: string;

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.opponent = (this.socketService.lastPacket as MatchPacket).opponent;

    this.socketService.stream.subscribe(packet => {
      if (packet.name == 'topic') {
        this.router.navigate(['/topic']);
      }
    });
  }

}
