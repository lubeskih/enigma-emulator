// Libraries
import { observable } from "mobx";

import { Plugboard } from "../enigma-parts/plugboard";

/**
 * Store
 */
export class Store {
  // Keyboard
  public firstRowLetters = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"];
  public secondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K"];
  public thirdRowLetters = ["P", "Y", "X", "C", "V", "B", "N", "M", "L"];

  // Plugboard
  public plugboard = new Plugboard();
  public selectedLetter: string | null = null;

  // Settings
  @observable enigmaType: "I" | "M3" | "M4" | null = null;
  @observable rotorOne = "I";
  @observable rotorTwo = "II";
  @observable rotorThree = "III";
  @observable rotorFour = "IV";
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
