import { getLetterIndexInAlphabet, Wheel } from "./wheel";

export class Reflector extends Wheel {
  private reflectedMap = new Map<number, number>();

  constructor(wiring: string) {
    super(wiring);

    [...Array<number>(26).keys()].forEach(key => {
      this.reflectedMap.set(key, getLetterIndexInAlphabet(wiring[key]));
      this.reflectedMap.set(getLetterIndexInAlphabet(wiring[key]), key);
    });
  }

  public getReflectedEndpoint(index: number) {
    const letter = this.reflectedMap.get(index);

    if (letter || letter === 0) {
      return letter;
    } else {
      return -1;
    }
  }
}
