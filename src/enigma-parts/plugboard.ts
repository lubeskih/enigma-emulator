// Libraries
import { observable } from "mobx";

import { alphabet } from "../store";

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

  /**
   *
   * @param plug the letter that the plug was assigned to
   *
   * To fully understand this function, please
   * check out the flowchart in the 'misc' directory.
   */
  public flow(plug: string) {
    if (this.plugWasSwapped(plug)) {
      if (this.anOrphanPlug()) {
        const storedValue = this.pb.get(plug);
        this.swapPlugs(plug);
        this.registerAsOrphan(storedValue);
      } else {
        this.registerAsOrphan(this.pb.get(plug));
        this.resetPlug(plug);
      }
    } else {
      if (this.anOrphanPlug()) {
        if (this.plugEqualsOrphanPlug(plug)) {
          this.orphanPlug = null;
        } else {
          this.swapPlugs(plug);
        }
      } else {
        this.registerAsOrphan(plug);
      }
    }

    return null;
  }
}
