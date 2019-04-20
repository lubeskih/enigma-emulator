// Libraries
import { observable } from "mobx";

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
}

/**
 * Plugboard
 */
export class Plugboard {
  @observable public pb = new Map();
  @observable public orphanPlug: string | null = null;

  constructor() {
    alphabet.forEach(letter => this.pb.set(letter, letter));
  }

  public resetAll() {
    alphabet.forEach(letter => this.pb.set(letter, letter));
  }

  private plugWasSwapped(plug: string): boolean {
    return !!this.pb.get(plug) && this.pb.get(plug) !== plug;
  }

  private anOrphanPlug(): boolean {
    return !!this.orphanPlug;
  }

  private plugEqualsOrphanPlug(plug: string): boolean {
    return !!(this.orphanPlug === plug);
  }

  private registerAsOrphan(plug: string) {
    this.pb.set(plug, plug);
    this.orphanPlug = plug;
  }

  private swapPlugs(plug: string) {
    this.pb.set(plug, this.orphanPlug);
    this.pb.set(this.orphanPlug, plug);

    this.orphanPlug = null;
  }

  private resetPlug(plug: string) {
    this.pb.set(plug, plug);
  }

  public getPlug(plug: string): string {
    return this.pb.get(plug);
  }

  public flow(plug: string, cx1: number, cy1: number) {
    if (this.plugWasSwapped(plug)) {
      console.log("The plug", plug, "is already swapped.");
      if (this.anOrphanPlug()) {
        console.log("There is an orphan plug: ", this.orphanPlug);
        console.log("Storing the value ", this.pb.get(plug), "for later use.");
        const storedValue = this.pb.get(plug);
        console.log("Swapping plugs:", plug, "and", this.orphanPlug);
        this.swapPlugs(plug);
        console.log("Registering 1 ", storedValue, "as an orphan!");
        this.registerAsOrphan(storedValue);
      } else {
        console.log("resetting the plug", plug);
        console.log("Registering 2 ", this.pb.get(plug), "as an orphan plug");
        this.registerAsOrphan(this.pb.get(plug));
        this.resetPlug(plug);
      }
    } else {
      console.log("The plug", plug, "is NOT swapped.");
      if (this.anOrphanPlug()) {
        console.log("There is an orphan plug: ", this.orphanPlug);
        if (this.plugEqualsOrphanPlug(plug)) {
          console.log(
            "The orphan plug equals the actual clicked plug, setting orphan plug to null"
          );
          this.orphanPlug = null;
          console.log(this.pb.get(plug));
        } else {
          console.log("Swapping plugs:", plug, "and", this.orphanPlug);
          this.swapPlugs(plug);
        }
      } else {
        console.log(
          "There is no orphan plug, registering",
          plug,
          "as an orphan plug"
        );
        this.registerAsOrphan(plug);
      }
    }

    return null;
  }
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
