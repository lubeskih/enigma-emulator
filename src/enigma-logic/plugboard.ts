// Libraries
import { observable } from "mobx";

// CONSTANTS
import { ALPHABET } from "../constants";

/**
 * Plugboard
 */
export class Plugboard {
  @observable public pb = new Map();
  @observable public excessPlug: string | null = null;

  constructor() {
    ALPHABET.forEach(letter => this.pb.set(letter, letter));
  }

  public resetAll() {
    ALPHABET.forEach(letter => this.pb.set(letter, letter));
  }

  public resetPlug(plug: string) {
    this.pb.set(plug, plug);
  }

  public getPlug(plug: string): string {
    return this.pb.get(plug);
  }

  /**
   *
   * @param plug the letter that the plug was assigned to
   *
   * To fully understand this function, please
   * check out the flowchart in the 'misc' directory.
   */
  public flow(plug: string) {
    if (this.plugWasSwapped(plug)) {
      if (this.anExcessPlug()) {
        const storedValue = this.pb.get(plug);
        this.swapPlugs(plug);
        this.registerAsExcess(storedValue);
      } else {
        this.registerAsExcess(this.pb.get(plug));
        this.resetPlug(plug);
      }
    } else {
      if (this.anExcessPlug()) {
        if (this.plugEqualsExcessPlug(plug)) {
          this.excessPlug = null;
        } else {
          this.swapPlugs(plug);
        }
      } else {
        this.registerAsExcess(plug);
      }
    }

    return null;
  }

  private plugWasSwapped(plug: string): boolean {
    return !!this.pb.get(plug) && this.pb.get(plug) !== plug;
  }

  private anExcessPlug(): boolean {
    return !!this.excessPlug;
  }

  private plugEqualsExcessPlug(plug: string): boolean {
    return !!(this.excessPlug === plug);
  }

  private registerAsExcess(plug: string) {
    this.pb.set(plug, plug);
    this.excessPlug = plug;
  }

  private swapPlugs(plug: string) {
    this.pb.set(plug, this.excessPlug);
    this.pb.set(this.excessPlug, plug);

    this.excessPlug = null;
  }
}
