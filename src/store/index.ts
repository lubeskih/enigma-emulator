// Libraries
import { observable } from "mobx";

import { Plugboard } from "../enigma-parts/plugboard";

import { Wheel, Rotor } from "../enigma-parts/wheel";
import { IWheel, IRotor } from "../types";

// - Walzenlage = Wheel Order
// - Ringstellung = Ring Setting
// - Grundstellung = Ground Setting (start position)

const ETW: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Stator / Entrittswalze (ETW) = Static Wheel
const ukwTypeB: string = "YRUHQSLDPXNGOKMIEBFZCWVJAT"; // Umkehrwalze (UKW) = Reflector Wheel of type B
const ukwTypeC: string = "FVPJIAOYEDRZXWGCTKUQSBNMHL"; // Umkehrwalze (UKW) = Reflector Wheel of type C

const rotorOne = {
  wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
  notch: "Y",
  turnover: "Q"
};

const rotorTwo = {
  wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
  notch: "M",
  turnover: "E"
};

const rotorThree = {
  wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
  notch: "D",
  turnover: "V"
};

const rotorFour = {
  wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
  notch: "R",
  turnover: "J"
};

const rotorFive = {
  wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
  notch: "H",
  turnover: "Z"
};

const rotorSix = {
  wiring: "JPGVOUMFYQBENHZRDKASXLICTW",
  notch: "HU",
  turnover: "ZM"
};

const rotorSeven = {
  wiring: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
  notch: "HU",
  turnover: "ZM"
};

const rotorEight = {
  wiring: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
  notch: "HU",
  turnover: "ZM"
};

/**
 * Store
 */
export class Store {
  // Keyboard
  public firstRowLetters = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"];
  public secondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K"];
  public thirdRowLetters = ["P", "Y", "X", "C", "V", "B", "N", "M", "L"];

  // Steckerbrett = Plugboard
  public plugboard = new Plugboard();
  public selectedLetter: string | null = null;

  // Settings
  @observable enigmaType: "I" | "M3" | "M4" | null = null;

  public etw: Wheel = new Wheel(ETW);

  public ukwB = new Wheel(ukwTypeB);
  public ukwC = new Wheel(ukwTypeC);

  public RI: Rotor = new Rotor(
    rotorOne.wiring,
    rotorOne.notch,
    rotorOne.turnover
  );

  public RII: Rotor = new Rotor(
    rotorTwo.wiring,
    rotorTwo.notch,
    rotorTwo.turnover
  );

  public RIII: Rotor = new Rotor(
    rotorThree.wiring,
    rotorThree.notch,
    rotorThree.turnover
  );

  public RIV: Rotor = new Rotor(
    rotorFour.wiring,
    rotorFour.notch,
    rotorFour.turnover
  );

  public RV: Rotor = new Rotor(
    rotorFive.wiring,
    rotorFive.notch,
    rotorFive.turnover
  );

  public RVI: Rotor = new Rotor(
    rotorSix.wiring,
    rotorSix.notch,
    rotorSix.turnover
  );

  public RVII: Rotor = new Rotor(
    rotorSeven.wiring,
    rotorSeven.notch,
    rotorSeven.turnover
  );

  public RVIII: Rotor = new Rotor(
    rotorEight.wiring,
    rotorEight.notch,
    rotorEight.turnover
  );
}

export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
