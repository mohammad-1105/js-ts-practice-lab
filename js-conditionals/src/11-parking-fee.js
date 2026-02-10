/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  if (typeof hours !== "number" || !Number.isFinite(hours) || hours <= 0) {
    return -1;
  }

  if (typeof vehicleType !== "string") {
    return -1;
  }

  const normalizedVehicleType = vehicleType.toLowerCase();

  

  const RATES = {
    car: { first: 5, additional: 3, max: 30 },
    motorcycle: { first: 3, additional: 2, max: 18 },
    bus: { first: 10, additional: 7, max: 60 },
  };

  if (!(normalizedVehicleType in RATES)) {
    return -1;
  }

  // round partial hours
  const billableHours = Math.ceil(hours);

  const { first, additional, max } = RATES[normalizedVehicleType];

  let totalFee;

  if (billableHours <= 1) {
    totalFee = first;
  } else {
    totalFee = first + (billableHours - 1) * additional;
  }

  // apply daily maximum cap
  if (totalFee > max) {
    totalFee = max;
  }

  return totalFee;
}
