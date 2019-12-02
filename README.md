# What is this?

Friis transmission equation.

# Installation

`npm install friis --save`

Then ...

import { friisTransmissionEquation } from 'friis';

let result = friisTransmissionEquation(8, 6, 6, 2, 10, 9, 50);

## Parameters

* *powerTx*: number (dBm)
* *gainTx*: number (dB)
* *gainRx*: number (dB)
* *lost*: number (dB)
* *frequency*: number (Hz)
* *magnitudeOrder*: number
* *distanceKm*: number (km)
