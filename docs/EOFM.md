<h2 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block"> Enigma Operator's Field Manual </h2>

##### Table of Contents

- [Introduction](#introduction)
- [Demystifying the Enigma](#demystifying-the-enigma)
- [A Current's Path](#current-path)
  - [Keyboard](#keyboard)
  - [Plugboard](#plugboard)
  - [Entry Wheel](#entry-wheel)
  - [Rotors](#rotors)
  - [Reflector](#reflector)
  - [Reverse path](#reverse-path)
- ~~[Operating the Enigma](#operating)~~
  - ~~[Enigma Models](#models)~~
    - ~~[Enigma I](#enigma-one)~~
    - ~~[Enigma M3](#enigma-m3)~~
    - ~~[Enigma M4](#enigma-m4)~~
  - ~~[Selecting a Model](#selecting-model)~~
  - ~~[Configuring the Settings](#configuring)~~
  - ~~[Enciphering Characters and Numbers](#characters)~~
  - ~~[Deciphering Message](#decipher)~~
- [Glossary of Technical Terms](#glossary)
- [Other Enigma Simulators](#other-enigmas)
- [References](#references)
- [Dedications](#dedications)

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

The German cryptographic authorities had modified it in a different way to create the machine which, though bearing the original name of Enigma, was much more effective than the commercially available device.

The underlying principle of an Enigma machine cipher is that of letter substitution, meaning that each letter of a plaintext (undeciphered message) is substituted by another letter.

It used electrical wirings to perform automatically a series of alphabetical substitutions. An Enigma machine would be used in a fixed state only for enciphering _one_ letter, and then the outermost (fast) rotor would move round by one place, creating a new set of connections between the input and the output.

For any Enigma, in any state, it would be true if `A` were enciphered into `E`, then in that same state, `E` would be enciphered as `A`. The substitution alphabets resulting from an Enigma state would always be _swappings_. However, the Enigma was associated with a grave weakness, in that the substitutions thus performed were always of this very special kind, with the particular feature that **no letter could ever be enciphered into itself**.

The receiver of the message had only to set up the machine in exactly the same way as the sender, and feed in the cipher-text, to recover the plain-text.

That being said, the machine had only mechanized the basic operations of substitution, in such a way that a more complex system came within practical grasp. The Enigma did nothing that could not have been done by the looking up of tables in books, but enabled the work to be done more quickly and accurately.

In all cipher systems one assumes that the message has been intercepted. The objective is then to make it impossible, or at any rate very difficult and time-consuming, for the interceptor to decrypt the message. The ciphers it produced were supposed to be unbreakable even by someone in possession of the machine.

<h3 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block">A Current's Path</h3>

When a button is depressed on the Enigma, a current, typically from a battery, starts its journey throughout the mechanical parts of the encryption device. The following paragraphs represent the current's path in order. The first stop is at the Keyboard. Take a moment to look at this circuit diagram before moving on.

<figure>
    <img src="img/curcuit-diagram.jpg"></img>
    <br>
</figure>

#### Keyboard

While the keyboard does not seem to do some complicated work when enciphering a letter, it actually does the most important work. When a key on the keyboard is pressed, one or more rotors move to form a new rotor configuration which will encode one letter as another. Keep in mind that the outermost rotor steps **before** current starts flowing through it.

#### Plugboard

The plugboard is similar to an old-fashioned telephone switch board that has ten wires, each wire having two ends that can be plugged into a slot. Each plug wire can connect two letters to be a pair (by plugging one end of the wire to one letter’s slot and the other end to another letter). The two letters in a pair will swap over, so if `A` is connected to `Z`, `A` becomes `Z` and `Z` becomes `A`. This provides an extra level of scrambling for the military.

#### Entry Wheel

The current entry wheel connects the plugboard to the rotor assembly. If the plugboard is not present, the entry wheel instead connects the keyboard and lampboard to the rotor assembly. The military Enigma connects the keys in straight alphabetical order: `A => A`, `B => B` and so on. The static rotor simply turns wires into contacts.

#### Rotors

The rotors are the heart of the Enigma machine. Each rotor is a disc, which has an electrical contact pins arranged in a circle on one face; and circular plates (electrical contacts) on the other (the pins and contacts represent the alphabet — typically the 26 letters A–Z).

When the rotors are mounted side-by-side on the spindle, the pins of one rotor rest against the plate contacts of the neighboring rotor, forming an electrical connection.

Inside the body of the rotor, 26 wires are randomly connected each pin on one side to a contact on the other. This is where the 'magic' happens, which is why the rotors are also called 'scramblers'.

##### Ring-settings (Ringstellung):

The rotors had to be marked in some way on the outside so that the different positions could be identified. However, here entered yet another element of complexity. Each rotor was encircled by a ring bearing the 26 letters, so that with the ring fixed in position, each letter would label a rotor position (In fact, the letter would show through a window at the top of the machine).

However, the position of the ring, relative to the wirings, would be changed each day. The wirings might be thought of as labelled by numbers from 1 to 26, and the position of the ring by the letters A to Z appearing in the window. So a ring-setting would determine where the ring was to sit on the rotor, with perhaps the letter G on position 1, H on position 2, and so forth (see the illustrations bellow).

It is important to keep in mind that the ring setting only affects the wiring, it doesn't affect the turnover which still happens at the same letters.

Since the rotation is triggered by a ratchet and pawl mechanism, every time a key is depressed, one or more rotors rotate by one place.

As this ring rotated with its rotor, a notch machined into it would eventually align itself with the pawl, allowing it to engage with the ratchet, and advance the rotor on its left.

The advancement of a rotor other than the left-hand one is called a turnover.

##### Ground-settings (Grundstellung):

The ground-settings tells the operator of the machine what position the rotors should be in when setting up the machine (the letters you see in the little windows). So, for example, if the ground-setting for the left-hand rotor is `A`, you should see the letter `A` through the left-hand little window of the machine.

###### BONUS: calculating the offset from the Ring/Ground settings

When you put the Rotor on the spindle, in any position, you create an `OFFSET`. The `OFFSET` is important so you would know how to calculate the entry/exit point of the current that flows through the Rotor.

When the Rotor's `Ring-setting` is set to `1` (which also can be represented as: `A`), and the `Ground-setting` is set to `A` (which also can be represented as : `1`), the `OFFSET` is `0`, since the `Ring-setting` and the `Ground-setting` are aligned.

You can find a basic illustration of the `Ground-settings` and `Ring-settings` of a Rotor below. Keep in mind that the illustrations represent `A` as `0`, `B` as `1` ... `Z` as `25`, and **NOT** `A` as `1`, `B` as `2` ... `Z` as `26`.

In the first illustration, the `Ring-setting` is set to `0`, and the `Ground-setting` is set to `A`, keep in mind that you actually see the **`Ground-setting`** through the little window, in this case the dark rectangle.

<img src="img/ring1.jpg">

So, when we have set the `Ring-setting` to `0` and the `Ground-setting` to `A` (which also can be represented as `0`), the `OFFSET` of the Rotor would be `Ground-setting - Ring-setting`, in this case: `0`. Meaning that, if we depress a button (and for the sake of this argument, let's say that the Rotor/s would **NOT** step after depressing a button), the current would flow throughout the Rotors that have **NO OFFSET**, so if I press `A`, it will enter the Rotor in the `0th` position, and exit at whatever wire might be connected to the `0th` position on the other side. But we know that when we depress a button, the right-most Rotor steps once **BEFORE** current starts flowing, so it creates an `OFFSET`, meaning: this time when we press `A`, it will enter the Rotor at position `current-position + 1 = 1`.

On the second illustration, the `Rotor` has it's `Ring-setting` set to `1` (`B`), but the `Ground-setting` is on `A` (`0`), so you basically see `A` through the little window, but now the offset is **NOT** `0`!

We can still calculate the offset as: `OFFSET = Ground-setting - Ring-setting = -1`, and IF `OFFSET < 0`, `OFFSET = 26 - | OFFSET | = 25`.

<img src="img/ring2.jpg">

Now, we still have the `Ring-setting` set to `1` (`B`), but we also want to see `B` (`1`) through the little window. By doing this, we align the `Ring-setting` and the `Ground-setting`, making the offset `0`, which will be the **SAME** with the first illustration.

<img src="img/ring3.jpg">

##### Basic Enigma:

For the sake of simplicity, the diagram has been drawn for an alphabet of only eight letters, although in fact the Enigma worked on the ordinary 26-letter alphabet.

It shows the state of the machine at some particular moment in its use. The lines marked correspond to current-carrying wires.

<figure>
    <img src="img/Enigma-1.jpg"></img>
    <center>
    <small><i>Current passing from the Entry-wheel, throughout the Rotors, reflecting itself at the Reflector and then going back to a different path which ends up again, at the Entry-wheel.</i><br> <i>Found in <a href="">Andrew Hodges'</a> book <strong>Alan Turing: The Enigma</strong>, digitalized by <a href="https://lh.mk">lh.mk</a></i>.</small>
    <center>
    <br>
</figure>

A simple switch system at the input has the effect that if a key (say the B key) is depressed, a current flows (as shown in the diagram by bold) lines and lights up a bulb in the output display panel (in this case, under the letter D). For the hypothetical 8-letter Enigma, the next state of the machine would be:

<figure>
    <img src="img/Enigma-2.jpg"></img>
    <center>
    <small><i>Current passing from the Entry-wheel, throughout the first rotor who's path just change, throughout the rest of the rotors, reflecting itself at the Reflector and then going back to a different path which ends up again, at the Entry-wheel.</i><br> <i>Found in <a href="">Andrew Hodges'</a> book <strong>Alan Turing: The Enigma</strong>, digitalized by <a href="https://lh.mk">lh.mk</a></i>.</small>
    <center>
    <br>
</figure>

#### Reflector

The reflector is the disc that can be found next (on the left side) to the left-most rotor. As it's name says, it reflects back the received electrical current. It basically connects outputs of the last rotor in pairs redirecting current back through the rotors by a different route.

The reflector ensured that Enigma would be **self-reciprocal**; thus, with two identically configured machines, a message could be encrypted on one and decrypted on the other. The reflector also gave Enigma the property that no letter ever encrypted to itself.

#### Reverse Path

After the reflector reflects the electrical current, the current goes back into the rotors (but now takes a different path), back into the entry wheel and ends up lighting one of the lamps.

<h3 style="background-color: #2b303b; color: white; padding: 3px 5px 3px 5px; display: inline-block">Operating the Enigma</h3>

#### Enigma Models

TBD

##### Enigma I

TBD

##### Enigma M3

TBD

##### Enigma M4

TBD

#### Selecting a Model

TBD

#### Configuring the Settings

TBD

#### Enciphering a Message

TBD

#### Deciphering a Message

TBD

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

##### Other Enigma Simulators

- [Louise Dade's Enigma Emulator](http://enigma.louisedade.co.uk/)
- [Tom MacWright's Enigma Simulator](https://observablehq.com/@tmcw/enigma-machine)

##### References

This manual is a collection of already published explanations of the machine.

- **Alan Turing: The Enigma** by [Andrew Hodges](https://www.synth.co.uk/).
- [Enigma machine - Brilliant](https://brilliant.org/wiki/enigma-machine/)
- [Enigma machine - Wikipedia](https://en.wikipedia.org/wiki/Enigma_machine)
- [Enigma machine - Codes and Ciphers](https://www.codesandciphers.org.uk/enigma/enigma1.htm)
- [Ellsbury - The Enigma machine - Its Construction, Operation and Complexity](http://www.ellsbury.com/enigma3.htm)

##### Dedications

I dedicate this software to the Internet. Have fun using it as I had fun writing it!

Also, a big **THANK YOU!** to:

- Simon (who actually built his own 3D printed Enigma machine -- check out his YouTube channel [here](https://www.youtube.com/channel/UCJqzEbh1UOpZJj3Hrv2mPZA)) from [asciimation.net](http://www.asciimation.co.nz/), for clearing up my confusion between the Grundstellung and the Ringstellung of the Enigma machine.

- My friend [Andrej Trajchevski](https://andrejt.com/), who actually bought me Andrew Hodge's book **Alan Turing: The Enigma** as a gift, which I later used for writing some parts of this manual.

- My friend [Nikola Demerdziev](), he knows why.
