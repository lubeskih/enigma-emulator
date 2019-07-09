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

  @observable lastLamp: string = "";

  @observable INPUT: string = "";
  @observable OUTPUT: string = "";

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

  first: string = "";

  cipher(letter: string) {
    letter = this.plugboard.getPlug(letter);
    let entryLetter = this.EW.getIndexOfLetterInWiring(letter);

    this.first = c.ALPHABET[entryLetter];

    this.stackedRotors[0].step();

    if (this.stackedRotors[0].turnoverLetterOnTop) {
      this.stackedRotors[1].step();

      if (
        this.stackedRotors[1].groundSettings === this.stackedRotors[1].turnover
      ) {
        this.stackedRotors[1].step();
        this.stackedRotors[2].step();
      }
    }

    for (let i = 0; i <= 2; i++) {
      entryLetter = this.stackedRotors[i].calcEntryContact(entryLetter);

      entryLetter = this.stackedRotors[i].calcRightToLeftExitContact(
        entryLetter
      );
    }

    entryLetter = this.UKW_B.getReflectedEndpoint(entryLetter);

    for (let i = 2; i >= 0; i--) {
      entryLetter = this.stackedRotors[i].calcEntryContact(entryLetter);

      entryLetter = this.stackedRotors[i].calcLeftToRightExitContact(
        entryLetter
      );
    }

    letter = this.plugboard.getPlug(c.ALPHABET[entryLetter]);

    if (this.INPUT && this.INPUT.replace(/\s/g, "").length % 4 === 0) {
      this.INPUT += " " + this.first;
    } else {
      this.INPUT += this.first;
    }

    if (this.OUTPUT && this.OUTPUT.replace(/\s/g, "").length % 4 === 0) {
      this.OUTPUT += " " + letter;
    } else {
      this.OUTPUT += letter;
    }

    this.lastLamp = letter;
  }

  resetSettings() {
    for (let i = 0; i < this.stackedRotors.length; i++) {
      this.stackedRotors[i].groundSettings = 1;
      this.stackedRotors[i].ringSettings = 1;
      this.stackedRotors[i].offset = 0;
    }

    this.stackedRotors = [this.R1, this.R2, this.R3];
    this.lastLamp = "";
    this.OUTPUT = "";
    this.INPUT = "";
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
