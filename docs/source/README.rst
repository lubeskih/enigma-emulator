What is the Enigma?
===================

The Enigma machines are a series of electro-mechanical rotor cipher machines, 
mainly developed and used in the early- to mid-20th century to protect commercial, 
diplomatic and military communication. Enigma was invented by the German engineer 
Arthur Scherbius at the end of World War I. [1 wikipedia]

.. note::
    Some of the resources you will find here about the inner working of the Enigma are 
    taken from other sources. Those sources will be linked, and all the credits go to them.

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Indices and tables
++++++++++++++++++

* The Enigma itself
* Enigma version I, M3 and M4
* Design
* Keyboard
* Plugboard
* Rotors and wiring
* Lamps
* Operating, encrypting and decrypting

What is the enigma-simulator?
============================

enigma-simulator is an Enigma I, M3 and M4 machine simulator for the Web. The simulator is written 
as a result of my curiosity towards history and cryptography. And also due to the 
fact that I was bored, and wanted to build something.

The simulator is written in TypeScript, accompanied by React, MobX and Bootstrap.

In this documentation, I cover some details about the inner working of the 
Enigma I, M3 and M4, and explain the parts I found difficult to understand 
as simple as I can. Also, I cover some details about how does the 
simulator works.

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Indices and tables
++++++++++++++++++

* Representing the keyboard
* Writing a plugboard in a most logical way
* Rotors and wiring
* Representing the lamps
* Drawing the current flow