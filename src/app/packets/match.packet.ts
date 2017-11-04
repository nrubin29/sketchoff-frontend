import { Packet } from './packet';

export class MatchPacket extends Packet {

  constructor(public opponent: string) {
    super('match');
  }
}