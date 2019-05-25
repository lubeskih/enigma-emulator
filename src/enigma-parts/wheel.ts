import { IWheel, IRotor } from "../types";

// CONSTANTS
import { ALPHABET } from "../constants";

export class Wheel implements IWheel {
  constructor(public wiring: string) {}

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
  private rotorWiring = new Map<number, number>();
  private invertedRotorWiring = new Map<number, number>();

  public groundSetting: string = "A";
  public ringSetting: string = "A";

  constructor(wiring: string, public notch: string, public turnover: string) {
    super(wiring);

    [...Array<number>(26).keys()].forEach(key =>
      this.rotorWiring.set(key, this.indexInAlphabet(wiring[key]))
    );

    this.invertedRotorWiring = this.invertMap(this.rotorWiring);
  }

  //////////////////////////////
  //     PRIVATE FUNCTIONS    //
  //////////////////////////////

  private indexInAlphabet(letter: string) {
    return ALPHABET.indexOf(letter);
  }

  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    let i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }

  //////////////////////////////
  //     PUBLIC FUNCTIONS     //
  //////////////////////////////

  public getRotorWiring(index: number) {
    return this.rotorWiring.get(index);
  }

  public getInvertedRotorWiring(index: number) {
    return this.invertedRotorWiring.get(index);
  }
}

// But current entering at position i does not necessarily
// connect with contact i on the rotor, because rotors turn around the spindle.

// That rotation causes an offset between the positions and the contacts.

// So the offset of the rotor can be can be determined by looking at the
// letter that is showing. We call that the top letter of the rotor
