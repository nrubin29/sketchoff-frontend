import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Router } from '@angular/router';
import { TopicPacket } from '../../packets/topic.packet';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topic: string;

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.topic = (this.socketService.lastPacket as TopicPacket).topic;

    this.socketService.stream.subscribe(packet => {
      if (packet.name == 'start') {
        this.router.navigate(['/draw']);
      }
    });
  }

}
