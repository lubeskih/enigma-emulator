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

  M4_EXTRA_WHEEL_BETA = new Rotor(c.M4_EXTRA_WHEEL_BETA, "NONE", "NONE");
  M4_EXTRA_WHEEL_GAMMA = new Rotor(c.M4_EXTRA_WHEEL_GAMMA, "NONE", "NONE");
  M4_EN_UKW_B_THIN = new Reflector(c.M4_EN_UKW_B_THIN);
  M4_EN_UKW_C_THIN = new Reflector(c.M4_EN_UKW_C_THIN);

  // Enigma I
  @observable ENIGMA_I_FR: Rotor = this.R1;
  @observable ENIGMA_I_MR: Rotor = this.R2;
  @observable ENIGMA_I_SR: Rotor = this.R3;
  @observable ENIGMA_I_REFLECTOR: Reflector = this.UKW_A;
  // #########

  // Enigma M3
  @observable ENIGMA_M3_FR: Rotor = this.R1;
  @observable ENIGMA_M3_MR: Rotor = this.R2;
  @observable ENIGMA_M3_SR: Rotor = this.R3;
  @observable ENIGMA_M3_REFLECTOR: Reflector = this.UKW_B;
  // #########

  // Enigma M4
  @observable ENIGMA_M4_FR: Rotor = this.R1;
  @observable ENIGMA_M4_MR: Rotor = this.R2;
  @observable ENIGMA_M4_SR: Rotor = this.R3;
  @observable ENIGMA_M4_EW: Rotor = this.M4_EXTRA_WHEEL_BETA;
  @observable ENIGMA_M4_REFLECTOR: Reflector = this.M4_EN_UKW_B_THIN;
  // #########

  cipher(letter: string) {
    const enteringLetter: string = letter;

    letter = this.plugboard.getPlug(letter);
    let toBeCipheredLetter = this.EW.getIndexOfLetterInWiring(letter);

    switch (this.enigmaModel) {
      case "I":
        this.stepRotorsFromEnigmaOne();
        toBeCipheredLetter = this.cipherFromEnigmaOne(toBeCipheredLetter);
        break;
      case "M3":
        this.stepRotorsFromEnigmaM3();
        toBeCipheredLetter = this.cipherFromEnigmaM3(toBeCipheredLetter);
        break;
      case "M4":
        this.stepRotorsFromEnigmaM4();
        toBeCipheredLetter = this.cipherFromEnigmaM4(toBeCipheredLetter);
        break;
    }

    letter = this.plugboard.getPlug(c.ALPHABET[toBeCipheredLetter]);

    if (this.INPUT && this.INPUT.replace(/\s/g, "").length % 4 === 0) {
      this.INPUT += " " + enteringLetter;
    } else {
      this.INPUT += enteringLetter;
    }

    if (this.OUTPUT && this.OUTPUT.replace(/\s/g, "").length % 4 === 0) {
      this.OUTPUT += " " + letter;
    } else {
      this.OUTPUT += letter;
    }

    this.lastLamp = letter;
  }

  resetEnigmaSettings() {
    let stackRotors: Rotor[];
    let stackRotorsLen = 2; // stackRotors.length fails for some reason :/ gotta investigate this.

    switch (this.enigmaModel) {
      case "I":
        stackRotors = [this.ENIGMA_I_FR, this.ENIGMA_I_MR, this.ENIGMA_I_SR];
        break;
      case "M3":
        stackRotors = [this.ENIGMA_M3_FR, this.ENIGMA_M3_MR, this.ENIGMA_M3_SR];
        break;
      case "M4":
        stackRotors = [
          this.ENIGMA_M4_FR,
          this.ENIGMA_M4_MR,
          this.ENIGMA_M4_SR,
          this.ENIGMA_M4_EW
        ];

        stackRotorsLen = 3;
        break;
      default:
        stackRotors = [this.ENIGMA_I_FR, this.ENIGMA_I_MR, this.ENIGMA_I_SR];
        break;
    }

    for (let i = 0; i <= stackRotorsLen; i++) {
      stackRotors[i].groundSettings = 1;
      stackRotors[i].ringSettings = 1;
      stackRotors[i].offset = 0;
    }

    // Reset plugboard
    this.plugboard.resetAll();
    this.plugboard.excessPlug = null;
    c.ALPHABET.map(letter => this.plugs.set(letter, false));

    // Reset lamps
    this.lastLamp = "";

    // Reset the logs
    this.OUTPUT = "";
    this.INPUT = "";
  }

  stepRotorsFromEnigmaOne() {
    if (this.ENIGMA_I_FR.turnover === this.ENIGMA_I_FR.groundSettings) {
      this.ENIGMA_I_FR.step();

      if (this.ENIGMA_I_MR.groundSettings === this.ENIGMA_I_MR.turnover) {
        this.ENIGMA_I_MR.step();
        this.ENIGMA_I_SR.step();
      } else {
        this.ENIGMA_I_MR.step();
      }
    } else {
      this.ENIGMA_I_FR.step();

      if (this.ENIGMA_I_MR.groundSettings === this.ENIGMA_I_MR.turnover) {
        this.ENIGMA_I_MR.step();
        this.ENIGMA_I_SR.step();
      }
    }
  }

  stepRotorsFromEnigmaM3() {
    if (this.ENIGMA_M3_FR.turnover === this.ENIGMA_M3_FR.groundSettings) {
      this.ENIGMA_M3_FR.step();

      if (this.ENIGMA_M3_MR.groundSettings === this.ENIGMA_M3_MR.turnover) {
        this.ENIGMA_M3_MR.step();
        this.ENIGMA_M3_SR.step();
      } else {
        this.ENIGMA_M3_MR.step();
      }
    } else {
      this.ENIGMA_M3_FR.step();

      if (this.ENIGMA_M3_MR.groundSettings === this.ENIGMA_M3_MR.turnover) {
        this.ENIGMA_M3_MR.step();
        this.ENIGMA_M3_SR.step();
      }
    }
  }

  stepRotorsFromEnigmaM4() {
    if (this.ENIGMA_M4_FR.turnover === this.ENIGMA_M4_FR.groundSettings) {
      this.ENIGMA_M4_FR.step();

      if (this.ENIGMA_M4_MR.groundSettings === this.ENIGMA_M4_MR.turnover) {
        this.ENIGMA_M4_MR.step();
        this.ENIGMA_M4_SR.step();
      } else {
        this.ENIGMA_M4_MR.step();
      }
    } else {
      this.ENIGMA_M4_FR.step();

      if (this.ENIGMA_M4_MR.groundSettings === this.ENIGMA_M4_MR.turnover) {
        this.ENIGMA_M4_MR.step();
        this.ENIGMA_M4_SR.step();
      }
    }
  }

  cipherFromEnigmaOne(toBeCipheredLetter: number): number {
    let stackRotors: Rotor[] = [
      this.ENIGMA_I_FR,
      this.ENIGMA_I_MR,
      this.ENIGMA_I_SR
    ];

    for (let i = 0; i <= 2; i++) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcRightToLeftExitContact(
        toBeCipheredLetter
      );
    }

    toBeCipheredLetter = this.ENIGMA_I_REFLECTOR.getReflectedEndpoint(
      toBeCipheredLetter
    );

    for (let i = 2; i >= 0; i--) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcLeftToRightExitContact(
        toBeCipheredLetter
      );
    }

    return toBeCipheredLetter;
  }

  cipherFromEnigmaM3(toBeCipheredLetter: number): number {
    let stackRotors: Rotor[] = [
      this.ENIGMA_M3_FR,
      this.ENIGMA_M3_MR,
      this.ENIGMA_M3_SR
    ];

    for (let i = 0; i <= 2; i++) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcRightToLeftExitContact(
        toBeCipheredLetter
      );
    }

    toBeCipheredLetter = this.ENIGMA_M3_REFLECTOR.getReflectedEndpoint(
      toBeCipheredLetter
    );

    for (let i = 2; i >= 0; i--) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcLeftToRightExitContact(
        toBeCipheredLetter
      );
    }

    return toBeCipheredLetter;
  }

  cipherFromEnigmaM4(toBeCipheredLetter: number): number {
    let stackRotors: Rotor[] = [
      this.ENIGMA_M4_FR,
      this.ENIGMA_M4_MR,
      this.ENIGMA_M4_SR
    ];

    for (let i = 0; i <= 2; i++) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcRightToLeftExitContact(
        toBeCipheredLetter
      );
    }

    toBeCipheredLetter = this.ENIGMA_M4_EW.calcEntryContact(toBeCipheredLetter);
    toBeCipheredLetter = this.ENIGMA_M4_EW.calcRightToLeftExitContact(
      toBeCipheredLetter
    );

    toBeCipheredLetter = this.ENIGMA_M4_REFLECTOR.getReflectedEndpoint(
      toBeCipheredLetter
    );

    toBeCipheredLetter = this.ENIGMA_M4_EW.calcEntryContact(toBeCipheredLetter);
    toBeCipheredLetter = this.ENIGMA_M4_EW.calcLeftToRightExitContact(
      toBeCipheredLetter
    );

    for (let i = 2; i >= 0; i--) {
      toBeCipheredLetter = stackRotors[i].calcEntryContact(toBeCipheredLetter);
      toBeCipheredLetter = stackRotors[i].calcLeftToRightExitContact(
        toBeCipheredLetter
      );
    }

    return toBeCipheredLetter;
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
