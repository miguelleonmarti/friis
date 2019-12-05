"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Friis transmission equation
 *
 * @example
 * let result = friisTransmissionEquation(8, 6, 6, 2, 10, 10**9, 50); // result = -128.4
 * @param powerTx Transmission power (dBm)
 * @param gainTx Transmission gain (dB)
 * @param gainRx Reception gain (dB)
 * @param lost Losees (dB)
 * @param frequency Frequency (Hz)
 * @param magnitudeOrder  Magnitude order
 * @param distanceKm Distance in kilometres (km)
 *
 * @returns Power received (dBm)
 */
function friisTransmissionEquation(powerTx, gainTx, gainRx, lost, frequency, magnitudeOrder, distanceKm) {
    var lambda = 300000000 / (frequency * magnitudeOrder);
    var lb = 20 * Math.log10((4 * Math.PI * (distanceKm * 1000)) / lambda);
    var prx = powerTx + gainTx + gainRx - lost - lb;
    prx = Math.trunc(prx) + Math.round((prx - Math.trunc(prx)) * 10) / 10;
    return prx;
}
exports.friisTransmissionEquation = friisTransmissionEquation;
