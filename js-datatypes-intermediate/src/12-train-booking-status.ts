/**
 * Train Booking Processor
 *
 * You are building a legacy system adapter for a train company.
 *
 * Rules:
 *   - input: { bookingRef: "TR-101", passengers: [...], train: {...}, classBooked: "Sleeper" }
 *   - formattedDate: today's date ISO string (e.g., "2023-10-27")
 *   - summary: "Train {id} is {status}. {count} Passengers."
 *     - If status is "delayed", add " (Late)" to status.
 *
 * Validation:
 *   - If input is null, return null
 *   - If price < 0, return null
 *
 * @param booking
 * @returns {object | null}
 */

interface Passenger {
  name: string;
  age: number;
  gender: string;
  booking: string;
  current: string;
}

interface Train {
  number: string;
  name: string;
  from: string;
  to: string;
}

interface BookingInput {
  bookingRef: string;
  train: Train;
  classBooked: string;
  passengers: Passenger[];
}

interface BookingStatus {
  bookingRefFormatted: string;
  trainInfo: string;
  passengers: {
    totalPassengers: number;
    confirmed: number;
    waitlisted: number;
    cancelled: number;
    standby: number;
    allConfirmed: boolean;
    anyWaitlisted: boolean;
  };
  chartPrepared: boolean;
}

export function processTrainBooking(booking: BookingInput): BookingStatus | null {
  // TODO: implement
  return null;
}
