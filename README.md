# enigma-emulator

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/hfour/envaridator/blob/master/LICENSE.md)

Enigma machine emulator for the Web. The emulator is faithful to the workings of the Enigma I, M3 and M4.

I highly recommend checking out the [Enigma Operator's Field Manual](https://github.com/lubeskih/enigma-simulator/blob/master/docs/EOFM.md) before using the emulator.

### Screenshot

![Enigma](src/misc/ss.png)

### Starting the emulator

Clone the repository:

`git clone https://github.com/lubeskih/enigma-emulator.git && cd enigma-emulator`

Then install the packages by entering:

`yarn install`

Starting the emulator can be done with:

`yarn start`

### Navigating around the repository

- `src` - Main source directory
- `src/components` - React components
- `constants` - Enigma constats (e.g. Enigma wiring, turnovers etc...)
- `enigma-logic` - Files that hold the main logic behind the Enigma (stepping, turnover etc..) behind the rotors, reflectors, stators etc...
- `misc` - misc
- `store` - MobX store files used in the project
- `types` - Interfaces/Types used in the project

### Reporting an issue

Use GitHub's issue system to report an issue (emulator logic error, manual typo etc...).

### Contributing

Contributions are more than welcome.

If you want to contribute, start with opening an issue before writing the code so we can first discuss the idea. If everything goes well, you are free to open a PR, but please don't forget to include details about your changes.

### License

This Enigma machine emulator is [MIT licensed](https://github.com/lubeskih/enigma-emulator/blob/master/LICENSE.md).
