import { IWheel, IRotor } from "../types";

export class Wheel implements IWheel {
  private _wiring: string[];

  constructor(letters: string) {
    this._wiring = letters.toUpperCase().split("");
  }

  get wiring(): string[] {
    return this.wiring;
  }
}

export class Rotor extends Wheel implements IRotor {
  private _positionLetter: string = "A";
  private _positionNumber: number = 0;

  constructor(wiring: string, public notch: string, public turnover: string) {
    super(wiring);
  }

  get positionLetter(): string {
    return this._positionLetter;
  }

  set positionLetter(p: string) {
    this._positionLetter = p;
  }

  get positionNumber(): number {
    return this._positionNumber;
  }

  set positionNumber(n: number) {
    this._positionNumber = n;
  }
}
