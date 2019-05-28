/**
 * ROTOR SPECIFICS
 * ---------------
 * EN - ENIGMA
 * ETW - ENTRYWHEEL
 * R<1-8> - ROTOR 1-8
 * W - WIRING
 * N - NOTCH
 * Q - TURNOVER
 * UKW<TYPE> - REFLECTOR TYPE <TYPE>
 */
export const EN_ETW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // ENTRY WHEEL

export const EN_R1_W = "EKMFLGDQVZNTOWYHXUSPAIBRCJ"; // ROTOR 1 WIRING
export const EN_R1_N = "Y"; // ROTOR 1 NOTCH
export const EN_R1_T = "Q"; // ROTOR 1 TURNOVER

export const EN_R2_W = "AJDKSIRUXBLHWTMCQGZNPYFVOE"; // ROTOR 2 WIRING
export const EN_R2_N = "M"; // ROTOR 2 NOTCH
export const EN_R2_T = "E"; // ROTOR 2 TURNOVER

export const EN_R3_W = "BDFHJLCPRTXVZNYEIWGAKMUSQO"; // ROTOR 3 WIRING
export const EN_R3_N = "D"; // ROTOR 3 NOTCH
export const EN_R3_T = "V"; // ROTOR 3 TURNOVER

export const EN_R4_W = "ESOVPZJAYQUIRHXLNFTGKDCMWB"; // ROTOR 4 WIRING
export const EN_R4_N = "R"; // ROTOR 4 NOTCH
export const EN_R4_T = "J"; // ROTOR 4 TURNOVER

export const EN_R5_W = "VZBRGITYUPSDNHLXAWMJQOFECK"; // ROTOR 5 WIRING
export const EN_R5_N = "H"; // ROTOR 5 NOTCH
export const EN_R5_T = "Z"; // ROTOR 5 TURNOVER

export const EN_R6_W = "JPGVOUMFYQBENHZRDKASXLICTW"; // ROTOR 6 WIRING
export const EN_R6_N = "HU"; // ROTOR 6 NOTCH
export const EN_R6_T = "ZM"; // ROTOR 6 TURNOVER

export const EN_R7_W = "NZJHGRCXMYSWBOUFAIVLPEKQDT"; // ROTOR 7 WIRING
export const EN_R7_N = "HU"; // ROTOR 7 NOTCH
export const EN_R7_T = "ZM"; // ROTOR 7 TURNOVER

export const EN_R8_W = "FKQHTLXOCBJSPDZRAMEWNIUYGV"; // ROTOR 8 WIRING
export const EN_R8_N = "HU"; // ROTOR 8 NOTCH
export const EN_R8_T = "ZM"; // ROTOR 8 TURNOVER

export const EN_UKW_A = "EJMZALYXVBWFCRQUONTSPIKHGD"; // REFLECTOR TYPE A
export const EN_UKW_B = "YRUHQSLDPXNGOKMIEBFZCWVJAT"; // REFLECTOR TYPE B
export const EN_UKW_C = "FVPJIAOYEDRZXWGCTKUQSBNMHL"; // REFLECTOR TYPE C

/**
 * MODEL M4 SPECIFICS
 */
export const M4_EN_UKW_BETA = "LEYJVCNIXWPBQMDRTAKZGFUHOS"; // REFLECTOR TYPE BETA
export const M4_EN_UKW_GAMMA = "FSOKANUERHMBTIYCWLQPZXVGJD"; // REFLECTOR TYPE GAMMA
export const M4_EN_UKW_B = "ENKQAUYWJICOPBLMDXZVFTHRGS"; // M4 REFLECTOR TYPE B
export const M4_EN_UKW_C = "RDOBJNTKVEHMLFCWZAXGYIPSUQ"; // M4 REFLECTOR TYPE C

/**
 * ARRAY OF CHARACTERS REPRESENTING
 * THE MODERN LATIN ALPHABET (IN ORDER)
 */
export const ALPHABET = [
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

export const NUMBERS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26
];

/**
 * FIRST / SECOND / THIRD ROW LETTERS
 * REPRESENTING THE KEYBOARD LAYOUT
 */
export const FIRST_ROW_LETTERS = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"];
export const SECOND_ROW_LETTERS = ["A", "S", "D", "F", "G", "H", "J", "K"];
export const THIRD_ROW_LETTERS = ["P", "Y", "X", "C", "V", "B", "N", "M", "L"];
