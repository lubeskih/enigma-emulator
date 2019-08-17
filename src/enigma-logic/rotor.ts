import { observable } from "mobx";

import { IRotor } from "../types";
import { getLetterIndexInAlphabet, Wheel } from "./wheel";

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
  public readonly notch: number;
  public readonly turnover: number[];

  @observable public groundSettings: number = 1;
  @observable public ringSettings: number = 1;

  public offset: number = 0;
  public rotorPositionFromRightToLeft: number = 0;

  private rightToLeftRW = new Map<number, number>();
  private leftToRightRW = new Map<number, number>();

  constructor(wiring: string, notch: string, turnover: string) {
    super(wiring);

    this.notch = getLetterIndexInAlphabet(notch);
    this.turnover = turnover
      .split("")
      .map(v => getLetterIndexInAlphabet(v) + 1);

    [...Array<number>(26).keys()].forEach(key => {
      this.rightToLeftRW.set(key, getLetterIndexInAlphabet(wiring[key]));
    });

    this.leftToRightRW = this.invertMap(this.rightToLeftRW);
  }

  public step() {
    if (this.offset === 25) {
      this.offset = 0;
    } else {
      this.offset += 1;
    }

    this.groundSettings += 1;

    if (this.groundSettings > 26) {
      this.groundSettings = 1;
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
    const calc = this.rightToLeftEndpoint(entryLetter) - this.offset;

    if (calc < 0) {
      return calc + 26;
    } else {
      return this.rightToLeftEndpoint(entryLetter) - this.offset;
    }
  }

  public calcLeftToRightExitContact(entryLetter: number) {
    const calc = this.leftToRightEndpoint(entryLetter) - this.offset;

    if (calc < 0) {
      return 26 - Math.abs(this.leftToRightEndpoint(entryLetter) - this.offset);
    } else {
      return this.leftToRightEndpoint(entryLetter) - this.offset;
    }
  }

  public rightToLeftEndpoint(index: number) {
    const letter = this.rightToLeftRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  public leftToRightEndpoint(index: number) {
    const letter = this.leftToRightRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  public setGroundSettings(setting: number) {
    this.groundSettings = setting;
    this.offset = this.groundSettings - this.ringSettings;

    if (this.offset < 0) {
      this.offset = 26 - Math.abs(this.offset);
    }
  }

  public setRingSettings(setting: number) {
    this.ringSettings = setting;
    this.offset = this.groundSettings - this.ringSettings;

    if (this.offset < 0) {
      this.offset = 26 - Math.abs(this.offset);
    }
  }

  //////////////////////////////
  //     PRIVATE FUNCTIONS    //
  //////////////////////////////

  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    const i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }
}
