/**
 * Wedding RSVP Callback Utilities
 *
 * Build callback-driven utilities for a modern wedding RSVP workflow.
 *
 * Functions:
 *
 * 1. `processGuests(guests, filterFn)`
 *    - Return guests where `filterFn(guest)` is `true`
 *    - If guests is not an array or filterFn not a function => `[]`
 *
 * 2. `notifyGuests(guests, notifyCallback)`
 *    - Call `notifyCallback(guest)` for each guest
 *    - Return array of all callback return values
 *    - Invalid input => `[]`
 *
 * 3. `handleRSVP(guest, onAccept, onDecline)`
 *    - If `guest.rsvp === "yes"`, call `onAccept(guest)`
 *    - If `guest.rsvp === "no"`, call `onDecline(guest)`
 *    - Otherwise return `null`
 *    - If guest or callbacks invalid => `null`
 *
 * 4. `transformGuestList(guests, ...transformFns)`
 *    - Apply transform functions left-to-right
 *    - Each transform receives an array and returns a new array
 *    - If guests invalid => `[]`
 *
 * @hint Callbacks are passed in as arguments and invoked conditionally or in sequence.
 */
export interface WeddingGuest {
  name: string;
  side?: string;
  rsvp?: string;
  [key: string]: unknown;
}

export function processGuests<T>(guests: T[], filterFn: (guest: T) => boolean): T[] {
  // your code here
  return [];
}

export function notifyGuests<T, R>(guests: T[], notifyCallback: (guest: T) => R): R[] {
  // your code here
  return [];
}

export function handleRSVP<T extends { rsvp?: string }>(
  guest: T | null | undefined,
  onAccept: (guest: T) => unknown,
  onDecline: (guest: T) => unknown,
): unknown | null {
  // your code here
  return null;
}

export function transformGuestList<T>(
  guests: T[],
  ...transformFns: Array<(items: T[]) => T[]>
): T[] {
  // your code here
  return [];
}
