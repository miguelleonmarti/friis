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
export function friisTransmissionEquation(
  powerTx: number,
  gainTx: number,
  gainRx: number,
  lost: number,
  frequency: number,
  magnitudeOrder: number,
  distanceKm: number
): number {
  let lambda: number = 300000000 / (frequency * magnitudeOrder);
  let lb: number = 20 * Math.log10((4 * Math.PI * (distanceKm * 1000)) / lambda);
  let prx: number = powerTx + gainTx + gainRx - lost - lb;
  prx = Math.trunc(prx) + Math.round((prx - Math.trunc(prx)) * 10) / 10;
  return prx;
}

