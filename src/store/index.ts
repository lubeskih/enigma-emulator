// Libraries
import { observable } from "mobx";
import { Plugboard } from "../enigma-logic/plugboard";

// Internal
import * as c from "../constants";
import { IDraggableRotor } from "../types";

import { Reflector } from "../enigma-logic/reflector";
import { Rotor } from "../enigma-logic/rotor";
import { Wheel } from "../enigma-logic/wheel";

/**
 * Application store
 */
export class Store {
  ///////////////
  // PLUGBOARD //
  ///////////////

  public plugboard = new Plugboard();

  // A map for keeping track which plugs are wired/free
  @observable public plugs = new Map<string, boolean>();

  ///////////
  // LAMPS //
  ///////////

  // Used for storing the last ciphered letter
  @observable public lastLamp: string = "";

  // --------------------
  // ROTORS
  // --------------------
  public EW = new Wheel(c.EN_ETW);

  public R1 = new Rotor(c.EN_R1_W, c.EN_R1_N, c.EN_R1_T);
  public R2 = new Rotor(c.EN_R2_W, c.EN_R2_N, c.EN_R2_T);
  public R3 = new Rotor(c.EN_R3_W, c.EN_R3_N, c.EN_R3_T);
  public R4 = new Rotor(c.EN_R4_W, c.EN_R4_N, c.EN_R4_T);
  public R5 = new Rotor(c.EN_R5_W, c.EN_R5_N, c.EN_R5_T);
  public R6 = new Rotor(c.EN_R6_W, c.EN_R6_N, c.EN_R6_T);
  public R7 = new Rotor(c.EN_R7_W, c.EN_R7_N, c.EN_R7_T);
  public R8 = new Rotor(c.EN_R8_W, c.EN_R8_N, c.EN_R8_T);

  // --------------------
  // REFLECTORS
  // --------------------

  public UKW_A = new Reflector(c.EN_UKW_A);
  public UKW_B = new Reflector(c.EN_UKW_B);
  public UKW_C = new Reflector(c.EN_UKW_C);

  // ------------------------------------
  // I SPECIFICS (ROTORS AND REFLECTORS)
  // ------------------------------------
  @observable public ENIGMA_I_REFLECTOR: Reflector = this.UKW_A;

  // ------------------------------------
  // M3 SPECIFICS (ROTORS AND REFLECTORS)
  // ------------------------------------
  @observable public ENIGMA_M3_REFLECTOR: Reflector = this.UKW_B;

  // ------------------------------------
  // M4 SPECIFICS (ROTORS AND REFLECTORS)
  // ------------------------------------
  public M4_EXTRA_WHEEL_BETA = new Rotor(c.M4_EXTRA_WHEEL_BETA, "NONE", "NONE");
  public M4_EXTRA_WHEEL_GAMMA = new Rotor(
    c.M4_EXTRA_WHEEL_GAMMA,
    "NONE",
    "NONE"
  );
  public M4_EN_UKW_B_THIN = new Reflector(c.M4_EN_UKW_B_THIN);
  public M4_EN_UKW_C_THIN = new Reflector(c.M4_EN_UKW_C_THIN);

  @observable public ENIGMA_M4_EW: Rotor = this.M4_EXTRA_WHEEL_BETA;
  @observable public ENIGMA_M4_REFLECTOR: Reflector = this.M4_EN_UKW_B_THIN;

  //////////////////////
  // GENERAL SETTINGS //
  //////////////////////

  // Keep track of the model in use
  @observable public enigmaModel: "I" | "M3" | "M4" = "I";

  // Keep track if the settings are locked or unlocked
  @observable public settingsAreLocked: boolean = false;

  // Keep track of the droppable rotor positions
  @observable public ENIGMA_ROTOR_POSITION_ONE: Rotor | null = null;
  @observable public ENIGMA_ROTOR_POSITION_TWO: Rotor | null = null;
  @observable public ENIGMA_ROTOR_POSITION_THREE: Rotor | null = null;

  // Store the INPUT for the keyboard
  @observable public INPUT: string = "";

  // Store the ciphered OUTPUT
  @observable public OUTPUT: string = "";

  // Store the last keyboard button press
  @observable public lastClickedLetter: string = "";

  ////////////////////////////////////////////////
  // ROTORS / POSITIONS DRAG AND DROP SPECIFICS //
  ////////////////////////////////////////////////

  // Keep track of which rotors are dropped and which are not
  @observable public draggableRotors = new Map<string, boolean>();

  // Store dropped rotors
  @observable public rotorDropPositionOne: IDraggableRotor | null = null;
  @observable public rotorDropPositionTwo: IDraggableRotor | null = null;
  @observable public rotorDropPositionThree: IDraggableRotor | null = null;

  /**
   *
   * Updates a droppable rotor position number one
   * @param item IDraggableRotor object
   * @returns void
   */
  public updateRotorDropPositionOne(item: IDraggableRotor): void {
    if (this.rotorDropPositionOne) {
      const getCurrentValue = this.draggableRotors.get(
        this.rotorDropPositionOne.id
      );

      if (typeof getCurrentValue === "boolean") {
        this.draggableRotors.set(
          this.rotorDropPositionOne.id,
          !getCurrentValue
        );
      }
    }

    this.draggableRotors.set(item.id, true);
    this.rotorDropPositionOne = item;
    this.ENIGMA_ROTOR_POSITION_ONE = this.getRotorObjectByRotorType(item.id);
  }

  /**
   *
   * Updates a droppable rotor position number two
   * @param item IDraggableRotor object
   * @returns void
   */
  public updateRotorDropPositionTwo(item: IDraggableRotor): void {
    if (this.rotorDropPositionTwo) {
      const getCurrentValue = this.draggableRotors.get(
        this.rotorDropPositionTwo.id
      );

      if (typeof getCurrentValue === "boolean") {
        this.draggableRotors.set(
          this.rotorDropPositionTwo.id,
          !getCurrentValue
        );
      }
    }

    this.draggableRotors.set(item.id, true);
    this.rotorDropPositionTwo = item;
    this.ENIGMA_ROTOR_POSITION_TWO = this.getRotorObjectByRotorType(item.id);
  }

  /**
   *
   * Updates a droppable rotor position number three
   * @param item IDraggableRotor object
   * @returns void
   */
  public updateRotorDropPositionThree(item: IDraggableRotor): void {
    if (this.rotorDropPositionThree) {
      const getCurrentValue = this.draggableRotors.get(
        this.rotorDropPositionThree.id
      );

      if (typeof getCurrentValue === "boolean") {
        this.draggableRotors.set(
          this.rotorDropPositionThree.id,
          !getCurrentValue
        );
      }
    }

    this.draggableRotors.set(item.id, true);
    this.rotorDropPositionThree = item;
    this.ENIGMA_ROTOR_POSITION_THREE = this.getRotorObjectByRotorType(item.id);
  }

  /**
   *
   * Updates a droppable rotor position number one
   * @param item IDraggableRotor object
   * @returns void
   */
  public checkIfAlreadyLoaded(id: string): boolean {
    const loaded = this.draggableRotors.get(id);

    if (loaded) {
      return loaded;
    } else {
      return false;
    }
  }

  /**
   *
   * Unloads a rotor from a position
   * @param position position number
   * @returns void or null
   */
  public unloadRotorByPosition(position: number): void | null {
    switch (position) {
      case 1:
        if (this.rotorDropPositionOne) {
          this.draggableRotors.set(this.rotorDropPositionOne.id, false);
        }

        this.rotorDropPositionOne = null;

        if (this.ENIGMA_ROTOR_POSITION_ONE) {
          this.ENIGMA_ROTOR_POSITION_ONE.groundSettings = 1;
          this.ENIGMA_ROTOR_POSITION_ONE.ringSettings = 1;
          this.ENIGMA_ROTOR_POSITION_ONE.offset = 0;
        }

        this.ENIGMA_ROTOR_POSITION_ONE = null;
        break;
      case 2:
        if (this.rotorDropPositionTwo) {
          this.draggableRotors.set(this.rotorDropPositionTwo.id, false);
        }

        this.rotorDropPositionTwo = null;

        if (this.ENIGMA_ROTOR_POSITION_TWO) {
          this.ENIGMA_ROTOR_POSITION_TWO.groundSettings = 1;
          this.ENIGMA_ROTOR_POSITION_TWO.ringSettings = 1;
          this.ENIGMA_ROTOR_POSITION_TWO.offset = 0;
        }

        this.ENIGMA_ROTOR_POSITION_TWO = null;

        break;
      case 3:
        if (this.rotorDropPositionThree) {
          this.draggableRotors.set(this.rotorDropPositionThree.id, false);
        }

        this.rotorDropPositionThree = null;

        if (this.ENIGMA_ROTOR_POSITION_THREE) {
          this.ENIGMA_ROTOR_POSITION_THREE.groundSettings = 1;
          this.ENIGMA_ROTOR_POSITION_THREE.ringSettings = 1;
          this.ENIGMA_ROTOR_POSITION_THREE.offset = 0;
        }

        this.ENIGMA_ROTOR_POSITION_THREE = null;

        break;
      default:
        return null;
    }
  }

  /**
   *
   * returns a IDraggableRotor object
   * according the position it is dropped
   * @param position position number
   * @returns void or null
   */
  public getPositionByPositionNumber(position: number): IDraggableRotor | null {
    switch (position) {
      case 1:
        return this.rotorDropPositionOne;
      case 2:
        return this.rotorDropPositionTwo;
      case 3:
        return this.rotorDropPositionThree;
      default:
        return this.rotorDropPositionOne;
    }
  }

  constructor() {
    // Make all draggable rotors "unloaded" on create.
    c.EIGHT_ROTOR_OPTIONS.map(rotor =>
      this.draggableRotors.set(rotor.id, false)
    );
  }

  ///////////////
  // FUNCTIONS //
  ///////////////

  /**
   *
   * Gets script version
   * @param letter
   * @returns void
   */
  public cipher(letter: string): void {
    this.lastClickedLetter = letter;

    letter = this.plugboard.getPlug(letter);
    let toBeCipheredLetter = this.EW.getIndexOfLetterInWiring(letter);

    // Step the rotors
    this.stepRotors();

    switch (this.enigmaModel) {
      case "I":
        toBeCipheredLetter = this.cipherFromEnigmaOne(toBeCipheredLetter);
        break;
      case "M3":
        toBeCipheredLetter = this.cipherFromEnigmaM3(toBeCipheredLetter);
        break;
      case "M4":
        toBeCipheredLetter = this.cipherFromEnigmaM4(toBeCipheredLetter);
        break;
    }

    letter = this.plugboard.getPlug(c.ALPHABET[toBeCipheredLetter]);

    // Update INPUT/OUTPUT, lamps and clicks
    this.update(letter);
  }

  /**
   *
   * Updates INPUT/OUTPUT logs
   * lamps and last clicked key
   *
   * @param letter
   * @returns void
   */
  public update(letter: string): void {
    if (this.INPUT && this.INPUT.replace(/\s/g, "").length % 4 === 0) {
      this.INPUT += " " + this.lastClickedLetter;
    } else {
      this.INPUT += this.lastClickedLetter;
    }

    if (this.OUTPUT && this.OUTPUT.replace(/\s/g, "").length % 4 === 0) {
      this.OUTPUT += " " + letter;
    } else {
      this.OUTPUT += letter;
    }

    this.lastLamp = letter;
  }

  /**
   *
   * Resets all settings
   * @returns void
   */
  public resetEnigmaSettings(): boolean {
    // Reset plugboard
    this.plugboard.resetAll();
    this.plugboard.excessPlug = null;
    c.ALPHABET.map(letter => this.plugs.set(letter, false));

    // Reset lamps
    this.lastLamp = "";

    // Reset the logs
    this.OUTPUT = "";
    this.INPUT = "";

    // Reset the positions
    c.EIGHT_ROTOR_OPTIONS.map(rotor =>
      this.draggableRotors.set(rotor.id, false)
    );

    // Remove the rotors from their positions
    this.rotorDropPositionOne = null;
    this.rotorDropPositionTwo = null;
    this.rotorDropPositionThree = null;

    if (
      !this.ENIGMA_ROTOR_POSITION_ONE ||
      !this.ENIGMA_ROTOR_POSITION_TWO ||
      !this.ENIGMA_ROTOR_POSITION_THREE
    ) {
      return false;
    }

    let stackRotors: Rotor[] = [];
    let stackRotorsLen = 2; // stackRotors.length fails for some reason :/ gotta investigate this.

    switch (this.enigmaModel) {
      case "I":
        stackRotors = [
          this.ENIGMA_ROTOR_POSITION_ONE,
          this.ENIGMA_ROTOR_POSITION_TWO,
          this.ENIGMA_ROTOR_POSITION_THREE
        ];
        break;
      case "M3":
        stackRotors = [
          this.ENIGMA_ROTOR_POSITION_ONE,
          this.ENIGMA_ROTOR_POSITION_TWO,
          this.ENIGMA_ROTOR_POSITION_THREE
        ];
        break;
      case "M4":
        stackRotors = [
          this.ENIGMA_ROTOR_POSITION_THREE,
          this.ENIGMA_ROTOR_POSITION_TWO,
          this.ENIGMA_ROTOR_POSITION_THREE,
          this.ENIGMA_M4_EW
        ];

        stackRotorsLen = 3;
        break;
      default:
        console.error("There was an error while resetting the settings.");
        return false;
    }

    for (let i = 0; i <= stackRotorsLen; i++) {
      stackRotors[i].groundSettings = 1;
      stackRotors[i].ringSettings = 1;
      stackRotors[i].offset = 0;
    }

    return true;
  }

  /**
   *
   * Handles the rotor stepping
   * @returns void
   */
  public stepRotors(): void | null {
    if (
      !this.ENIGMA_ROTOR_POSITION_ONE ||
      !this.ENIGMA_ROTOR_POSITION_TWO ||
      !this.ENIGMA_ROTOR_POSITION_THREE
    ) {
      return null;
    }

    if (
      this.ENIGMA_ROTOR_POSITION_ONE.turnover.includes(
        this.ENIGMA_ROTOR_POSITION_ONE.groundSettings
      )
    ) {
      this.ENIGMA_ROTOR_POSITION_ONE.step();

      if (
        this.ENIGMA_ROTOR_POSITION_TWO.turnover.includes(
          this.ENIGMA_ROTOR_POSITION_TWO.groundSettings
        )
      ) {
        this.ENIGMA_ROTOR_POSITION_TWO.step();
        this.ENIGMA_ROTOR_POSITION_THREE.step();
      } else {
        this.ENIGMA_ROTOR_POSITION_TWO.step();
      }
    } else {
      this.ENIGMA_ROTOR_POSITION_ONE.step();

      if (
        this.ENIGMA_ROTOR_POSITION_TWO.turnover.includes(
          this.ENIGMA_ROTOR_POSITION_TWO.groundSettings
        )
      ) {
        this.ENIGMA_ROTOR_POSITION_TWO.step();
        this.ENIGMA_ROTOR_POSITION_THREE.step();
      }
    }
  }

  ///////////////////////
  // CIPHERING LETTERS //
  ///////////////////////

  /**
   *
   * Ciphers letter specifically for Enigma I
   * @param toBeCipheredLetter letter -> number bijection
   */
  public cipherFromEnigmaOne(toBeCipheredLetter: number): number {
    if (
      !this.ENIGMA_ROTOR_POSITION_ONE ||
      !this.ENIGMA_ROTOR_POSITION_TWO ||
      !this.ENIGMA_ROTOR_POSITION_THREE
    ) {
      return -1;
    }

    const stackRotors: Rotor[] = [
      this.ENIGMA_ROTOR_POSITION_ONE,
      this.ENIGMA_ROTOR_POSITION_TWO,
      this.ENIGMA_ROTOR_POSITION_THREE
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

  /**
   *
   * Ciphers letter specifically for Enigma M3
   * @param toBeCipheredLetter letter -> number bijection
   */
  public cipherFromEnigmaM3(toBeCipheredLetter: number): number {
    if (
      !this.ENIGMA_ROTOR_POSITION_ONE ||
      !this.ENIGMA_ROTOR_POSITION_TWO ||
      !this.ENIGMA_ROTOR_POSITION_THREE
    ) {
      return -1;
    }

    const stackRotors: Rotor[] = [
      this.ENIGMA_ROTOR_POSITION_ONE,
      this.ENIGMA_ROTOR_POSITION_TWO,
      this.ENIGMA_ROTOR_POSITION_THREE
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

  /**
   *
   * Ciphers letter specifically for Enigma M4
   * @param toBeCipheredLetter letter -> number bijection
   */
  public cipherFromEnigmaM4(toBeCipheredLetter: number): number {
    if (
      !this.ENIGMA_ROTOR_POSITION_ONE ||
      !this.ENIGMA_ROTOR_POSITION_TWO ||
      !this.ENIGMA_ROTOR_POSITION_THREE
    ) {
      return -1;
    }

    const stackRotors: Rotor[] = [
      this.ENIGMA_ROTOR_POSITION_ONE,
      this.ENIGMA_ROTOR_POSITION_TWO,
      this.ENIGMA_ROTOR_POSITION_THREE
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

  /**
   *
   * Returns a Rotor object depending on its
   * Roman numeral representation
   * @param rotorType letter
   * @returns Rotor object
   */
  public getRotorObjectByRotorType(rotorType: string): Rotor {
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

  /**
   *
   * Returns an extra wheel (Rotor) object
   * depending on its Roman numeral representation
   * @param exWheelType letter
   * @returns Rotor object
   */
  public getExtraWheelObjectByName(exWheelType: string): Rotor {
    switch (exWheelType) {
      case "BETA":
        return this.M4_EXTRA_WHEEL_BETA;
      case "GAMMA":
        return this.M4_EXTRA_WHEEL_GAMMA;
      default:
        return this.M4_EXTRA_WHEEL_BETA;
    }
  }

  /**
   *
   * Returns a reflector object
   * depending on its Roman numeral representation
   * @param exWheelType letter
   * @returns Reflector object
   */
  public getReflectorObjectByName(reflector: string): Reflector {
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

  /**
   *
   * Returns the letter from its number bijection
   * @param num number
   * @returns letter string
   */
  public getLetterByNumber(num: number): string {
    return c.ALPHABET[num - 1];
  }
}
