import { Packet } from './packet';

export class NamePacket extends Packet {

  constructor(public username: string) {
    super('name');
  }
}