import { IWheel, IRotor } from "../types";
import { observable } from "mobx";

// CONSTANTS
import { ALPHABET } from "../constants";

export class Wheel implements IWheel {
  readonly wiring: string;

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

export class Reflector extends Wheel {
  private _reflectedMap = new Map<number, number>();

  constructor(wiring: string) {
    super(wiring);

    [...Array<number>(26).keys()].forEach(key => {
      this._reflectedMap.set(key, getLetterIndexInAlphabet(wiring[key]));
      this._reflectedMap.set(getLetterIndexInAlphabet(wiring[key]), key);
    });
  }

  public getReflectedEndpoint(index: number) {
    let letter = this._reflectedMap.get(index);

    if (letter) {
      return letter;
    } else {
      return -1;
    }
  }

  public returnMap() {
    console.log("REFLECTOR MAP", this._reflectedMap);
  }
}

/**
 * A template/class that represents a Rotor
 *
 * A Rotor must have:
 * 1. Wiring:
 * ABCDEFGHIJKLMNOPQRSTUVWXYZ <- rotor wiring
 * EKMFLGDQVZNTOWYHXUSPAIBRCJ <- rotor wiring
 *
 * 2. Turnover: The letter that would be on top of the rotor at the point in time when the notch engaged.
 * 3. Notch: The letter(s) that causes the next rotor to step
 */
export class Rotor extends Wheel implements IRotor {
  readonly notch: number;
  readonly turnover: number;

  @observable groundSettings: number = 1;
  @observable ringSettings: number = 1;

  public offset: number = 0;
  public rotorPositionFromRightToLeft: number = 0;

  private _rightToLeftRW = new Map<number, number>();
  private _leftToRightRW = new Map<number, number>();

  constructor(wiring: string, notch: string, turnover: string) {
    super(wiring);

    this.notch = getLetterIndexInAlphabet(notch);
    this.turnover = getLetterIndexInAlphabet(turnover);

    [...Array<number>(26).keys()].forEach(key => {
      this._rightToLeftRW.set(key, getLetterIndexInAlphabet(wiring[key]));
    });

    this._leftToRightRW = this.invertMap(this._rightToLeftRW);
  }

  public step() {
    if (this.offset === 25) {
      this.offset = 0;
    } else {
      this.offset += 1;
    }
  }

  public calcEntryContact(entryLetter: number) {
    if (entryLetter + this.offset > 25) {
      return entryLetter + this.offset - 26;
    } else {
      return entryLetter + this.offset;
    }
  }

  public calcRightToLeftExitContact(entryLetter: number) {
    if (this.rightToLeftEndpoint(entryLetter) - this.offset < 0) {
      return 26 + this.rightToLeftEndpoint(entryLetter) - this.offset;
    } else {
      return this.rightToLeftEndpoint(entryLetter) - this.offset;
    }
  }

  public calcLeftToRightExitContact(entryLetter: number) {
    if (this.leftToRightEndpoint(entryLetter) - this.offset < 0) {
      return 26 - Math.abs(this.leftToRightEndpoint(entryLetter) - this.offset);
    } else {
      return Math.abs(this.leftToRightEndpoint(entryLetter) - this.offset);
    }
  }

  public rightToLeftEndpoint(index: number) {
    let letter = this._rightToLeftRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  public leftToRightEndpoint(index: number) {
    let letter = this._leftToRightRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  //////////////////////////////
  //     PRIVATE FUNCTIONS    //
  //////////////////////////////

  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    let i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }
}

/////////////////////////
//   HELPER FUNCTIONS  //
/////////////////////////

function getLetterIndexInAlphabet(letter: string) {
  return ALPHABET.indexOf(letter);
}
