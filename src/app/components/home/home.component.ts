import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(private router: Router, private socketService: SocketService) { }

  ngOnInit() {

  }

  submitForm() {
    this.socketService.connect(this.username).then(() => {
      this.socketService.stream.subscribe(packet => {
        if (packet.name == 'next') {
          this.router.navigate(['/lobby']);
        }
      });
    });
  }
}
