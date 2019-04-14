// Libraries
// import { observable } from 'mobx';

// Store
export class Store {
  // Keyboard
  public firstRowLetters = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"];
  public secondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K"];
  public thirdRowLetters = ["P", "Y", "X", "C", "V", "B", "N", "M", "L"];

  // Plugboard
  public plugboard = new Plugboard();
}

export class Plugboard {
  private pb = new Map();
  private alphabet = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Z",
    "U",
    "I",
    "O",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "P",
    "Y",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "L"
  ];

  constructor() {
    this.alphabet.forEach(letter => this.pb.set(letter, null));
  }

  setLetter(letter: string, replace: string) {
    this.pb.set(letter, replace);
    return this.pb.get(letter);
  }

  getLetter(letter: string) {
    return this.pb.get(letter);
  }
}
