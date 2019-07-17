// Libraries
import { observable } from "mobx";
import { Plugboard } from "../enigma-logic/plugboard";

import * as c from "../constants";

import { Rotor, Wheel, Reflector } from "../enigma-logic/wheel";

/**
 * Store
 */
export class Store {
  // Steckerbrett = Plugboard
  public plugboard = new Plugboard();

  @observable plugs = new Map<string, boolean>();

  public selectedLetter: string | null = null;

  @observable lastLamp: string = "";

  @observable INPUT: string = "";
  @observable OUTPUT: string = "";

  // Settings
  @observable enigmaModel: "I" | "M3" | "M4" | null = "I";
  @observable settingsAreLocked: boolean = false;

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

  UKW_A = new Reflector(c.EN_UKW_A);
  UKW_B = new Reflector(c.EN_UKW_B);
  UKW_C = new Reflector(c.EN_UKW_C);

  /**
   * MODEL M4 SPECIFICS
   */

  M4_EXTRA_WHEEL_BETA = new Rotor(c.M4_EXTRA_WHEEL_BETA, "NONE", "NONE");
  M4_EXTRA_WHEEL_GAMMA = new Rotor(c.M4_EXTRA_WHEEL_GAMMA, "NONE", "NONE");
  M4_EN_UKW_B_THIN = new Reflector(c.M4_EN_UKW_B_THIN);
  M4_EN_UKW_C_THIN = new Reflector(c.M4_EN_UKW_C_THIN);

  @observable FAST_ROTOR: Rotor = this.R1;
  @observable MIDDLE_ROTOR: Rotor = this.R2;
  @observable SLOW_ROTOR: Rotor = this.R3;
  @observable REFLECTOR: Reflector = this.UKW_A;

  @observable M4_EXTRA_WHEEL: Rotor = this.M4_EXTRA_WHEEL_BETA;
  @observable M4_REFLECTOR: Reflector = this.M4_EN_UKW_B_THIN;

  // Stacked Rotors
  stackedRotors: Rotor[] = [this.R1, this.R2, this.R3];

  changeStackedRotor(rotorPositionFromRightToLeft: number, rotorType: string) {
    this.stackedRotors[
      rotorPositionFromRightToLeft
    ] = this.getRotorObjectByRotorType(rotorType);
  }

  cipher(letter: string) {
    let first: string = letter;

    letter = this.plugboard.getPlug(letter);
    let entryLetter = this.EW.getIndexOfLetterInWiring(letter);

    if (
      this.stackedRotors[0].turnover === this.stackedRotors[0].groundSettings
    ) {
      this.stackedRotors[0].step();

      if (
        this.stackedRotors[1].groundSettings === this.stackedRotors[1].turnover
      ) {
        this.stackedRotors[1].step();
        this.stackedRotors[2].step();
      } else {
        this.stackedRotors[1].step();
      }
    } else {
      this.stackedRotors[0].step();

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

    if (this.enigmaModel === "M4") {
      entryLetter = this.M4_EXTRA_WHEEL.calcEntryContact(entryLetter);
      entryLetter = this.M4_EXTRA_WHEEL.calcRightToLeftExitContact(entryLetter);
    }

    entryLetter = this.REFLECTOR.getReflectedEndpoint(entryLetter);

    if (this.enigmaModel === "M4") {
      entryLetter = this.M4_EXTRA_WHEEL.calcEntryContact(entryLetter);
      entryLetter = this.M4_EXTRA_WHEEL.calcLeftToRightExitContact(entryLetter);
    }

    for (let i = 2; i >= 0; i--) {
      entryLetter = this.stackedRotors[i].calcEntryContact(entryLetter);

      entryLetter = this.stackedRotors[i].calcLeftToRightExitContact(
        entryLetter
      );
    }

    letter = this.plugboard.getPlug(c.ALPHABET[entryLetter]);

    if (this.INPUT && this.INPUT.replace(/\s/g, "").length % 4 === 0) {
      this.INPUT += " " + first;
    } else {
      this.INPUT += first;
    }

    if (this.OUTPUT && this.OUTPUT.replace(/\s/g, "").length % 4 === 0) {
      this.OUTPUT += " " + letter;
    } else {
      this.OUTPUT += letter;
    }

    this.lastLamp = letter;
  }

  resetSettings() {
    // Reset all stacked rotors
    for (let i = 0; i < this.stackedRotors.length; i++) {
      this.stackedRotors[i].groundSettings = 1;
      this.stackedRotors[i].ringSettings = 1;
      this.stackedRotors[i].offset = 0;
    }

    // Reset the plugboard settings
    this.plugboard.resetAll();
    this.plugboard.excessPlug = null;
    c.ALPHABET.map(letter => this.plugs.set(letter, false));

    // Reset the lamps
    this.lastLamp = "";

    // Reset the logs
    this.OUTPUT = "";
    this.INPUT = "";

    // Reset the Extra Wheel
    if (this.enigmaModel === "M4") {
      this.M4_EXTRA_WHEEL.groundSettings = 1;
      this.M4_EXTRA_WHEEL.ringSettings = 1;
    }
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

  getExtraWheelObjectByName(exWheel: string) {
    switch (exWheel) {
      case "BETA":
        return this.M4_EXTRA_WHEEL_BETA;
      case "GAMMA":
        return this.M4_EXTRA_WHEEL_GAMMA;
      default:
        return this.M4_EXTRA_WHEEL_BETA;
    }
  }

  getReflectorObjectByName(reflector: string) {
    switch (reflector) {
      case "UKW-A":
        return this.UKW_A;
      case "UKW-B":
        return this.UKW_B;
      case "UKW-C":
        return this.UKW_C;
      case "UKW-b":
        return this.M4_EN_UKW_B_THIN;
      case "UKW-c":
        return this.M4_EN_UKW_C_THIN;
      default:
        return this.UKW_A;
    }
  }

  getLetterByNumber(num: number): string {
    return c.ALPHABET[num - 1];
  }
}
