import { Packet } from './packet';

export class UsernamePacket extends Packet {

  constructor(public username: string) {
    super('username');
  }
}