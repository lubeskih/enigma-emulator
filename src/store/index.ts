// Libraries
import { observable } from "mobx";
import { Plugboard } from "../enigma-parts/plugboard";

import * as c from "../constants";

import { Rotor, Wheel, Reflector } from "../enigma-parts/wheel";

/**
 * Store
 */
export class Store {
  // Steckerbrett = Plugboard
  public plugboard = new Plugboard();
  public selectedLetter: string | null = null;

  // Settings
  @observable enigmaType: "I" | "M3" | "M4" | null = null;
  @observable lockSettings: boolean = false;

  // Rotors / Reflectors / Entry Wheel
  EW = new Wheel(c.EN_ETW);

  R1 = new Rotor(c.EN_R1_W, c.EN_R1_N, c.EN_R1_T);
  R2 = new Rotor(c.EN_R2_W, c.EN_R2_N, c.EN_R2_T);
  R3 = new Rotor(c.EN_R3_W, c.EN_R3_N, c.EN_R3_T);
  R4 = new Rotor(c.EN_R4_W, c.EN_R4_N, c.EN_R4_T);
  R5 = new Rotor(c.EN_R5_W, c.EN_R5_N, c.EN_R5_T);
  R6 = new Rotor(c.EN_R6_W, c.EN_R6_N, c.EN_R6_T);
  R7 = new Rotor(c.EN_R7_W, c.EN_R7_N, c.EN_R7_T);
  R8 = new Rotor(c.EN_R8_W, c.EN_R8_N, c.EN_R8_T);

  UKW_B = new Reflector(c.EN_UKW_B);

  // Stacked Rotors
  stackedRotors: Rotor[] = [this.R1, this.R2, this.R3];

  changeStackedRotor(rotorPositionFromRightToLeft: number, rotorType: string) {
    this.stackedRotors[
      rotorPositionFromRightToLeft
    ] = this.getRotorObjectByRotorType(rotorType);
  }

  offset = 0;

  cipher(letter: string) {
    // this.offset = this.offset + 1;
    letter = this.plugboard.getPlug(letter);
    console.log("Plugboard letter:", letter);

    let entryLetter = this.EW.getIndexOfLetterInWiring(letter);
    console.log("After EW:", entryLetter);

    entryLetter = entryLetter + this.offset;

    console.log("Enters R1 as:", entryLetter, c.ALPHABET[entryLetter]);
    entryLetter = this.stackedRotors[0].rightToLeftEndpoint(entryLetter);
    console.log("Exits R1 as:", entryLetter, c.ALPHABET[entryLetter]);

    console.log("Enters R2 as:", entryLetter, c.ALPHABET[entryLetter]);
    entryLetter = this.stackedRotors[1].rightToLeftEndpoint(entryLetter);
    console.log("Exits R2 as:", entryLetter, c.ALPHABET[entryLetter]);

    console.log("Enters R3 as:", entryLetter, c.ALPHABET[entryLetter]);
    console.log(this.stackedRotors[2].returnMap());
    entryLetter = this.stackedRotors[2].rightToLeftEndpoint(entryLetter);
    console.log("Exits R3 as:", entryLetter, c.ALPHABET[entryLetter]);

    console.log("------------ REFLECTING ------------");
    entryLetter = this.UKW_B.getReflectedEndpoint(entryLetter);
    console.log("REFLECTED AS:", entryLetter, c.ALPHABET[entryLetter]);

    console.log("Enters R3 as:", entryLetter, c.ALPHABET[entryLetter]);
    entryLetter = this.stackedRotors[2].leftToRightEndpoint(entryLetter);
    console.log("Exits R3 as:", entryLetter, c.ALPHABET[entryLetter]);

    console.log("Enters R2 as:", entryLetter, c.ALPHABET[entryLetter]);
    entryLetter = this.stackedRotors[1].leftToRightEndpoint(entryLetter);
    console.log("Exits R2 as:", entryLetter, c.ALPHABET[entryLetter]);

    entryLetter = entryLetter + this.offset;

    console.log("Enters R1 as:", entryLetter, c.ALPHABET[entryLetter]);
    entryLetter = this.stackedRotors[0].leftToRightEndpoint(entryLetter);
    console.log("Exits R1 as:", entryLetter, c.ALPHABET[entryLetter]);

    entryLetter = entryLetter + this.offset;

    if (entryLetter === 26) {
      entryLetter = 0;
    }

    console.log("FINAL:", this.EW.convertIndexToLetter(entryLetter));
    console.log("------------------------------------");
  }

  /////////////////////////
  //   HELPER FUNCTIONS  //
  /////////////////////////

  getRotorObjectByRotorType(rotorType: string) {
    switch (rotorType) {
      case "I":
        return this.R1;
      case "II":
        return this.R2;
      case "III":
        return this.R3;
      case "IV":
        return this.R4;
      case "V":
        return this.R5;
      case "VI":
        return this.R6;
      case "VII":
        return this.R7;
      case "VIII":
        return this.R8;
      default:
        return this.R1;
    }
  }
}
