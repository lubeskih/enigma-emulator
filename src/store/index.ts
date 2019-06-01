// Libraries
import { observable } from "mobx";
import { Plugboard } from "../enigma-parts/plugboard";

import * as c from "../constants";

import { Rotor } from "../enigma-parts/wheel";

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

  R1 = new Rotor(c.EN_R1_W, c.EN_R1_N, c.EN_R1_T);
  R2 = new Rotor(c.EN_R2_W, c.EN_R2_N, c.EN_R2_T);
  R3 = new Rotor(c.EN_R3_W, c.EN_R3_N, c.EN_R3_T);
  R4 = new Rotor(c.EN_R4_W, c.EN_R4_N, c.EN_R4_T);
  R5 = new Rotor(c.EN_R5_W, c.EN_R5_N, c.EN_R5_T);
  R6 = new Rotor(c.EN_R6_W, c.EN_R6_N, c.EN_R6_T);
  R7 = new Rotor(c.EN_R7_W, c.EN_R7_N, c.EN_R7_T);
  R8 = new Rotor(c.EN_R8_W, c.EN_R8_N, c.EN_R8_T);

  stackedRotors: Rotor[] = [this.R1, this.R2, this.R3];

  stackAndReplaceRotor(rotorId: number, rotorType: string) {
    this.stackedRotors[rotorId] = this.returnRotorByType(rotorType);
  }

  returnRotorByType(rotorType: string) {
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
