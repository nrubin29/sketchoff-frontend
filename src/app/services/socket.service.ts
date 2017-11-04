import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import { Packet } from '../packets/packet';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;
  stream: Observable<Packet>;

  username: string;
  lastPacket: Packet;

  constructor(private router: Router) {
  }

  connect(username: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.socket = io(location.protocol + '//' + location.hostname + ':8080');
      this.socket.on('disconnect', () => {
        this.router.navigate(['/']);
      });
      this.socket.on('connect', () => {
        this.stream = new Observable<Packet>(observer => {
          this.socket.on('packet', packet => {
            this.lastPacket = packet;
            observer.next(packet);
          });
          // return () => {
          //     this.socket.off('event');
          // }
        });

        resolve();
      });
    });
  }

  isConnected(): boolean {
    return this.socket && this.socket.connected;
  }

  emit(packet: Packet) {
    if (!this.isConnected()) {
      throw new Error('Socket is not connected!');
    }

    console.log(`Emitting packet ${JSON.stringify(packet)}`);
    this.socket.emit(packet.name, packet);
  }
}
