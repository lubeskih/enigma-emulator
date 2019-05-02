import { IWheel, IRotor } from "../types";
import { alphabet } from "../store/index";

export class Wheel implements IWheel {
  constructor(public wiring: string) {}

  public wiringIndexOf(letter: string): number {
    return this.wiring.indexOf(letter);
  }
}

export class Rotor extends Wheel implements IRotor {
  private _rotorWiring = new Map<number, number>();
  private _invertedRotorWiring = new Map<number, number>();
  private _topLetter: string = "A";

  private indexInAlphabet(letter: string) {
    return alphabet.indexOf(letter);
  }

  private invertMap<K, V>(m: Map<K, V>): Map<V, K> {
    let i = new Map<V, K>();
    m.forEach((v, k) => i.set(v, k));

    return i;
  }

  constructor(wiring: string, public notch: string, public turnover: string) {
    super(wiring);

    [...Array<number>(26).keys()].forEach(key =>
      this._rotorWiring.set(key, this.indexInAlphabet(wiring[key]))
    );

    this._invertedRotorWiring = this.invertMap(this._rotorWiring);
  }

  public getRotorWiring(index: number) {
    return this._rotorWiring.get(index);
  }

  public getInvertedRotorWiring(index: number) {
    return this._invertedRotorWiring.get(index);
  }

  public setTopLetter(letter: string) {
    this._topLetter = letter;
  }

  public getTopLetter() {
    return this._topLetter;
  }
}

// But current entering at position i does not necessarily
// connect with contact i on the rotor, because rotors turn around the spindle.

//  That rotation causes an offset between the positions and the contacts.

// So the offset of the rotor can be can be determined by looking at the
// letter that is showing. We call that the top letter of the rotor
