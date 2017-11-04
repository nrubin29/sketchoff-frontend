import { Packet } from './packet';

export class DrawingPacket extends Packet {

  constructor(public data: string) {
    super('drawing');
  }
}