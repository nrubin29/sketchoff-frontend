import { Packet } from './packet';

export class TopicPacket extends Packet {

  constructor(public topic: string) {
    super('topic');
  }
}