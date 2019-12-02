"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function friisTransmissionEquation(powerTx, gainTx, gainRx, lost, frequency, orden, distanceKm) {
    var lambda = 300000000 / (frequency * orden);
    var lb = 20 * Math.log10((4 * Math.PI * (distanceKm * 1000)) / lambda);
    var prx = powerTx + gainTx + gainRx - lost - lb;
    prx = Math.trunc(prx) + Math.round((prx - Math.trunc(prx)) * 10) / 10;
    return prx;
}
exports.friisTransmissionEquation = friisTransmissionEquation;
