import { Packet } from './packet';

export class ResultsPacket extends Packet {

  constructor(public player1: PlayerData, public player2: PlayerData) {
    super('results');
  }
}