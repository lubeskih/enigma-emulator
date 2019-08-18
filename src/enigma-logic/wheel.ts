import { IWheel } from "../types";

// CONSTANTS
import { ALPHABET } from "../constants";

export class Wheel implements IWheel {
  public readonly wiring: string;

  constructor(wiring: string) {
    this.wiring = wiring;
  }

  public getIndexOfLetterInWiring(letter: string): number {
    return this.wiring.indexOf(letter);
  }

  public convertIndexToLetter(index: number): string {
    return this.wiring[index];
  }
}

/////////////////////////
//   HELPER FUNCTIONS  //
/////////////////////////

export function getLetterIndexInAlphabet(letter: string) {
  return ALPHABET.indexOf(letter);
}
