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
export declare function friisTransmissionEquation(powerTx: number, gainTx: number, gainRx: number, lost: number, frequency: number, magnitudeOrder: number, distanceKm: number): number;
