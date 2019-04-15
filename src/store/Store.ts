// Libraries
import { observable } from "mobx";

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

// Store
export class Store {
  // Keyboard
  public firstRowLetters = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"];
  public secondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K"];
  public thirdRowLetters = ["P", "Y", "X", "C", "V", "B", "N", "M", "L"];

  // Plugboard
  public plugboard = new Plugboard();

  @observable selectedLetter: string | null = null;
}

export class Plugboard {
  private pb = new Map();

  constructor() {
    alphabet.forEach(letter => this.pb.set(letter, letter));
  }

  replaceLetter(letter: string, newLetter: string) {
    this.pb.set(letter, newLetter);
    return this.pb.get(letter);
  }

  getLetter(letter: string) {
    return this.pb.get(letter);
  }
}
