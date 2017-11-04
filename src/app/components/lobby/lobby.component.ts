import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.stream.subscribe(packet => {
      if (packet.name == 'match') {
        this.router.navigate(['/match']);
      }
    });
  }

}
