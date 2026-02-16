/**
 * City Holiday Calendar Manager (Module Pattern)
 *
 * Build a module-style holiday manager with private internal state.
 *
 * Function:
 * - `createHolidayManager()`
 *
 * Public methods:
 *
 * 1. `addHoliday(name, date, type)`
 *    - `date` format: `YYYY-MM-DD`
 *    - `type`: `public`, `cultural`, or `seasonal`
 *    - Return new total count
 *    - Invalid input or duplicate name => `-1`
 *
 * 2. `removeHoliday(name)`
 *    - Return `true` if removed, else `false`
 *
 * 3. `getAll()`
 *    - Return COPY of all holiday entries
 *
 * 4. `getByType(type)`
 *    - Return holidays filtered by type
 *
 * 5. `getUpcoming(currentDate, n = 3)`
 *    - Return next `n` holidays with date >= currentDate
 *    - Sorted by date ascending
 *
 * 6. `getCount()`
 *    - Return number of holidays
 *
 * @hint Keep internal arrays private and expose access only through methods.
 */
export type HolidayType = "public" | "cultural" | "seasonal";

export interface HolidayEntry {
  name: string;
  date: string;
  type: HolidayType;
}

export interface HolidayManager {
  addHoliday: (name: string, date: string, type: HolidayType) => number;
  removeHoliday: (name: string) => boolean;
  getAll: () => HolidayEntry[];
  getByType: (type: HolidayType) => HolidayEntry[];
  getUpcoming: (currentDate: string, n?: number) => HolidayEntry[];
  getCount: () => number;
}

export function createHolidayManager(): HolidayManager {
  // your code here
  return {
    addHoliday: () => -1,
    removeHoliday: () => false,
    getAll: () => [],
    getByType: () => [],
    getUpcoming: () => [],
    getCount: () => 0,
  };
}
