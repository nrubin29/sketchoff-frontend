import { Packet } from './packet';

export class ResultsPacket extends Packet {

  constructor(public players: PlayerData[]) {
    super('results');
  }
}