import { Wheel, getLetterIndexInAlphabet } from "./wheel";

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

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }
}
