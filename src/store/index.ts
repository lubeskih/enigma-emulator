// Libraries
import { observable } from "mobx";
import { Plugboard } from "../enigma-parts/plugboard";

/**
 * Store
 */
export class Store {
  // Steckerbrett = Plugboard
  public plugboard = new Plugboard();
  public selectedLetter: string | null = null;

  // Settings
  @observable enigmaType: "I" | "M3" | "M4" | null = null;
}
