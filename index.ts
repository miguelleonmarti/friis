export function friisTransmissionEquation(
  powerTx: number,
  gainTx: number,
  gainRx: number,
  lost: number,
  frequency: number,
  magnitudeOrder: number,
  distanceKm: number
) {
  let lambda: number = 300000000 / (frequency * magnitudeOrder);
  let lb: number = 20 * Math.log10((4 * Math.PI * (distanceKm * 1000)) / lambda);
  let prx: number = powerTx + gainTx + gainRx - lost - lb;
  prx = Math.trunc(prx) + Math.round((prx - Math.trunc(prx)) * 10) / 10;
  return prx;
}

