import { Packet } from './packet';

export class NewGamePacket extends Packet {

  constructor() {
    super('newGame');
  }
}