<h2 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block"> Enigma Operator's Field Manual </h2>

##### Table of Contents

- [Introduction](#introduction)
- [Demystifying the Enigma](#demystifying-the-enigma)
- [A Current's Path](#current-path)
  - [Keyboard](#keyboard)
  - [Plugboard](#plugboard)
  - [Entry Wheel](#entry-wheel)
  - ~~[Rotors](#rotors)~~
  - ~~[Reflector](#reflector)~~
  - ~~[Reverse path](#reverse-path)~~
  - ~~[Lamps](#lamps)~~
- ~~[Operating the Enigma](#operating)~~
  - ~~[Enigma Models](#models)~~
    - ~~[Enigma I](#enigma-one)~~
    - ~~[Enigma M3](#enigma-m3)~~
    - ~~[Enigma M4](#enigma-m4)~~
  - ~~[Selecting a Model](#selecting-model)~~
  - ~~[Configuring the Settings](#configuring)~~
  - ~~[Enciphering Characters and Numbers](#characters)~~
  - ~~[Deciphering Message](#decipher)~~
- [Glossary of Tehnical Terms](#glossary)
- ~~[References](#refereces)~~

<h3 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block">Introduction</h3>

Welcome to the **Enigma Operator's Field Manual**. This manual's purpose is to demystify the Enigma machine, uncover the inner working of the device, as well as provide clear instructions for operating it on a [computer simulator](https://enigma.lh.mk).

The simulator is faithful to the workings of the following Enigma models:

- `Enigma I` - used by the Heer (army) and the Luftwaffe (air-force).
- `Enigma M3` - used by the Wehrmacht (unified armed forces of Nazi Germany).
- `Enigma M4` - used by the Kriegsmarine (navy).

<h3 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block">Demystifying the Enigma</h3>

The Enigma machine is an electro-mechanical encryption device used by the Germans during World War II to transmit coded messages.

Ciphering was the necessary consequence of radio communications, which had to be used for aerial, naval, and mobile land warfare, where a radio message to one was a message to all. Virtually every German official radio communication was enciphered on the Enigma machine.

The basic Enigma machine had been exhibited in 1923, soon after its invention, at the congress of the International Postal Union. Originally, it was sold commercially and used by banks.

The German cryptographic authorities had modified it in a different way to create the machine which, though bearing the original name of Enigma, was much more effective than the comercially available device.

The underlying principle of an Enigma machine cipher is that of letter substitution, meaning that each letter of our plaintext (undeciphered message) is substituted by another letter.

It used electrical wirings to perform automatically a series of alphabetical substitutions. An Enigma machine would be used in a fixed state only for enciphering _one_ letter, and then the outermost (fast) rotor would move round by one place, creating a new set of connections between the input and the output.

For any Enigma, in any state, it would be true if `A` were enciphered into `E`, then in that same state, `E` would be enciphered as `A`. The substitution alphabets resulting from an Enigma state would always be _swappings_. However, the Enigma was associated with a grave weakness, in that the substitutions thus performed were always of this very special kind, with the particular feature that **no letter could ever be enciphered into itself**.

The receiver of the message had only to set up the machine in exactly the same way as the sender, and feed in the cipher-text, to recover the plain-text.

That being said, the machine had only mechanised the basic operations of substitution and adding on, in such a way that a more complex system came within practical grasp. The Enigma did nothing that could not have been done by the looking up of tables in books, but enabled the work to be done more quickly and accurately.

In all cipher systems one assumes that the message has been intercepted. The objective is then to make it impossible, or at any rate very difficult and time-consuming, for the interceptor to decrypt the message. The ciphers it produced were supposed to be unbreakable even by someone in possession of the machine.

<h3 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block">A Current's Path</h3>

When a button is depressed on the Enigma, a current, typically from a battery, starts its journey throughout the mechanical parts of the encryption device. The following paragraphs represent the current's path in order. The first stop is at the Keyboard. Take a moment to loo at this curcuit diagram before proceeding.

<figure>
    <img src="img/curcuit-diagram.jpg"></img>
    <br>
</figure>

#### Keyboard

While the keyboard does not seem to do some complicated work when enciphering a letter, it actually does the most important work. When a key on the keyboard is pressed, one or more rotors move to form a new rotor configuration which will encode one letter as another. Keep in mind that the outermost rotor steps **before** current starts flowing through it.

#### Plugboard

The plugboard is similar to an old-fashioned telephone switch board that has ten wires, each wire having two ends that can be plugged into a slot. Each plug wire can connect two letters to be a pair (by plugging one end of the wire to one letter’s slot and the other end to another letter). The two letters in a pair will swap over, so if `A` is connected to `Z`, `A` becomes `Z` and `Z` becomes `A`. This provides an extra level of scrambling for the military.

#### Entry Wheel

The current entry wheel connects the plugboard to the rotor assembly. If the plugboard is not present, the entry wheel instead connects the keyboard and lampboard to the rotor assembly. The military Enigma connects the keys in straigh alphabetical order: A -> A, B -> B and so on. The static rotor simply turns wires into contacts.

#### Rotors

The rotors are the heart of the Enigma machine. TBD

###### Ring-settings (Ringstellung):

The rotors had to be marked in some way on the outside so that the different positions could be identified. However, here entered yet another element of complexity. Each rotor was encircled by a ring bearing the 26 letters, so that with the ring fixed in position, each letter would label a rotor position. (In fact, the letter would show through a window at the top of the machine.). However, the position of the ring, relative to the wirings, would be changed each day. The wirings might be thought of as labelled by numbers from 1 to 26, and the position of the ring by the letters A to Z appearing in the window. So a ring-setting would determine where the ring was to sit on the rotor, with perhaps the letter G on position 1, H on position 2, and so forth.

#### Reflector

TBD.

#### Reverse Path

TBD.

#### Lamps

TBD.

For the sake of simplicity, the diagram has been drawn for an alphabet of only eight letters, although in fact the Enigma worked on the ordinary 26-letter alphabet.

It shows the state of the machine at some particular moment in its use. The lines marked correspond to current-carrying wires.

<figure>
    <img src="img/Enigma-1.jpg"></img>
    <center>
    <small><i>Current passing from the EKW, throughout the Rotors, reflecting itself at the UKW and back to a different path which ends up again, at the EKW.</i><br> <i>Found in <a href="">Andrew Hodges'</a> book <strong>Alan Turing: The Enigma</strong>, digitalized by <a href="https://who.lh.mk">lh.mk</a></i>.</small>
    <center>
    <br>
</figure>

A simple switch system at the input has the effect that if a key (say the B keys) is depressed, a current flows (as shown in the diagram by bold) lines and lights up a bulb in the output display panel (in this case, under the letter D). For the hypothetical 8-letter Enigma, the next state of the machine would be:

<figure>
    <img src="img/Enigma-2.jpg"></img>
    <center>
    <small><i>Current passing from the EKW, throughout the first rotor who's path just change, throughout the rest of the rotors, reflecting itself at the UKW and back to a different path which ends up again, at the EKW.</i><br> <i>Found in <a href="">Andrew Hodges'</a> book <strong>Alan Turing: The Enigma</strong>, digitalized by <a href="https://who.lh.mk">lh.mk</a></i>.</small>
    <center>
    <br>
</figure>

####

##### Glossary of Technical Terms:

- `Tastatur` - Keyboard
- `Steckerbrett` - Plugboard
- `Grundstellung` - Ground / Initial settings
- `Ringstellung` - Ring settings
- `Maschineneinstellung` - Machine settings
- `Lampen` - Lamps
- `Walzenlage` - Wheel Order
- `Umkehrwalze (UKW)` - Reversing drum / Reflector Wheel
- `Stator / Entrittswalze (ETW)` - Static Wheel

##### References

- https://brilliant.org/wiki/enigma-machine/
- Alan Turing: The Enigma
- Enigma machine @ Wikipedia
- https://www.codesandciphers.org.uk/enigma/enigma2.htm
- https://www.codesandciphers.org.uk/enigma/enigma1.htm
