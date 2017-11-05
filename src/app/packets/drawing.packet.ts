import { Packet } from './packet';

export class DrawingPacket extends Packet {

  constructor(public sketch: string) {
    super('drawing');
  }
}