import { IWheel, IRotor } from "../types";
import { observable } from "mobx";

// CONSTANTS
import { ALPHABET } from "../constants";

export class Wheel implements IWheel {
  readonly wiring: string;

  constructor(wiring: string) {
    this.wiring = wiring;
  }

  public wiringIndexOf(letter: string): number {
    return this.wiring.indexOf(letter);
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

  private _offset: number = 0;

  private _rotorWiring = new Map<number, number>();
  private _invertedRotorWiring = new Map<number, number>();

  constructor(wiring: string, notch: string, turnover: string) {
    super(wiring);

    this.notch = this.wiringIndexOf(notch);
    this.turnover = this.wiringIndexOf(turnover);

    [...Array<number>(26).keys()].forEach(key => {
      this._rotorWiring.set(key, this.indexInAlphabet(wiring[key]));
    });

    this._invertedRotorWiring = this.invertMap(this._rotorWiring);
  }

  //////////////////////////////
  //     PUBLIC FUNCTIONS     //
  //////////////////////////////
  public step(entryLetter: number) {
    this.rotateGroundSettings();
    this.checkOffset();

    let contact = this.findNewContact(entryLetter);

    return contact;
  }

  private findNewContact(entryLetter: number) {
    let contact = entryLetter + this._offset;

    if (contact >= 26) {
      return contact - 26;
    }

    return contact;
  }

  public getRotorWiring(index: number) {
    return this._rotorWiring.get(index);
  }

  public getInvertedRotorWiring(index: number) {
    return this._invertedRotorWiring.get(index);
  }

  get offset() {
    return this._offset;
  }

  set offset(offset: number) {
    this._offset = offset;
  }

  //////////////////////////////
  //     PRIVATE FUNCTIONS    //
  //////////////////////////////
  private checkOffset() {
    if (this._offset === 25) {
      this._offset = 0;
    } else {
      this._offset += 1;
    }

    return null;
  }

  private rotateGroundSettings() {
    if (this.groundSettings === 26) {
      this.groundSettings = 1;
    } else {
      this.groundSettings += 1;
    }

    return null;
  }

  private indexInAlphabet(letter: string) {
    return ALPHABET.indexOf(letter);
  }

  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    let i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }
}
