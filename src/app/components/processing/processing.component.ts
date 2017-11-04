import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.stream.subscribe(packet => {
      if (packet.name == 'score') {
        this.router.navigate(['/results']);
      }
    });
  }

}
