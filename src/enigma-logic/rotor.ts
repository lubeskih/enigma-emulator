import { observable } from "mobx";

import { IRotor } from "../types";
import { getLetterIndexInAlphabet, Wheel } from "./wheel";

/**
 * A class representing a Rotor
 */
export class Rotor extends Wheel implements IRotor {
  // turnover is the letter (or number) visible in the window before
  // a rotor triggers the rotor next to it to step
  public readonly turnover: number[];

  @observable public groundSettings: number = 1;
  @observable public ringSettings: number = 1;
  public offset: number = 0;

  // These maps keep track of the internal wires of the rotor
  // right to left and left to right wiring
  private rightToLeftRW = new Map<number, number>();
  private leftToRightRW = new Map<number, number>();

  constructor(wiring: string, turnover: string) {
    super(wiring);
    this.turnover = turnover
      .split("")
      .map(v => getLetterIndexInAlphabet(v) + 1);

    [...Array<number>(26).keys()].forEach(key => {
      this.rightToLeftRW.set(key, getLetterIndexInAlphabet(wiring[key]));
    });

    this.leftToRightRW = this.invertMap(this.rightToLeftRW);
  }

  /**
   * Steps the rotor
   *
   * @param none
   * @returns void
   */
  public step(): void {
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

  /**
   *
   * Calculates the entry contact when a letter is pressed
   *
   * @param entryLetter the letter coming from the EW
   * @returns number - the entry contact position
   */
  public calculateEntryContact(entryLetter: number): number {
    if (entryLetter + this.offset > 25) {
      return entryLetter + this.offset - 26;
    } else {
      return entryLetter + this.offset;
    }
  }

  ///////////////////////////
  // RIGHT TO LEFT CURRENT //
  ///////////////////////////

  /**
   *
   * Calculates the left exit contact when current arrives on the right side
   *
   * @param entryLetter number - entered letter represented in its number bijection
   */
  public calculateRTLContact(entryLetter: number): number {
    const calc = this.findRTLEndpoint(entryLetter) - this.offset;

    if (calc < 0) {
      return calc + 26;
    } else {
      return calc;
    }
  }

  /**
   *
   * Returns the left endpoint of the right endpoint
   *
   * @param index number - enetered letter represented in its number bijection
   */
  public findRTLEndpoint(index: number): number {
    const letter = this.rightToLeftRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  ///////////////////////////
  // LEFT TO RIGHT CURRENT //
  ///////////////////////////

  /**
   *
   * Calculates the right exit contact when current arrives on the left side
   *
   * @param entryLetter number - entered letter represented in its number bijection
   */
  public calculateLTRContact(entryLetter: number): number {
    const calc = this.findLTREndpoint(entryLetter) - this.offset;

    if (calc < 0) {
      return 26 - Math.abs(this.findLTREndpoint(entryLetter) - this.offset);
    } else {
      return calc;
    }
  }

  /**
   *
   * Returns the right endpoint of the left endpoint
   *
   * @param index number - enetered letter represented in its number bijection
   */
  public findLTREndpoint(index: number): number {
    const letter = this.leftToRightRW.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }

  /**
   * Updates the ground setting of the rotor
   *
   * @param setting new ground setting
   * @returns void
   */
  public setGroundSettings(setting: number): void {
    this.groundSettings = setting;
    this.offset = this.groundSettings - this.ringSettings;

    if (this.offset < 0) {
      this.offset = 26 - Math.abs(this.offset);
    }
  }

  /**
   * Updates the ring setting of the rotor
   *
   * @param setting new ring setting
   * @returns void
   */
  public setRingSettings(setting: number): void {
    this.ringSettings = setting;
    this.offset = this.groundSettings - this.ringSettings;

    if (this.offset < 0) {
      this.offset = 26 - Math.abs(this.offset);
    }
  }

  //////////////////////////////
  //     PRIVATE FUNCTIONS    //
  //////////////////////////////

  /**
   * Invert a map
   *
   * @param m map
   * @returns inverted map
   */
  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    const i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }
}
