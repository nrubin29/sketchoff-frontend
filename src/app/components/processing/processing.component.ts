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
    let sub = this.socketService.stream.subscribe(packet => {
      if (packet.name == 'results') {
        sub.unsubscribe();
        this.router.navigate(['/results']);
      }
    });
  }

}
