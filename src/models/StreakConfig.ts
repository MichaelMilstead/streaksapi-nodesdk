/**
 * Enum for frequency types of a streak.
 *
 * @enum {string}
 */
export enum FrequencyType {
  /** Streak occurs daily. */
  Daily = "daily",

  /** Streak occurs weekly. */
  Weekly = "weekly",

  /** Streak occurs monthly. */
  Monthly = "monthly",

  /** Streak has a custom frequency. */
  Custom = "custom",
}

/**
 * Enum for days of the week to indicate the start of a week.
 *
 * @enum {string}
 */
export enum WeekStartDay {
  /** Week starts on Monday. */
  Monday = "Monday",

  /** Week starts on Tuesday. */
  Tuesday = "Tuesday",

  /** Week starts on Wednesday. */
  Wednesday = "Wednesday",

  /** Week starts on Thursday. */
  Thursday = "Thursday",

  /** Week starts on Friday. */
  Friday = "Friday",

  /** Week starts on Saturday. */
  Saturday = "Saturday",

  /** Week starts on Sunday. */
  Sunday = "Sunday",
}

/**
 * Configuration used for calculating a streak.
 *
 * @interface StreakConfig
 * @property {FrequencyType} frequencyType - The frequency type of the streak.
 * @property {number} customFrequencyMS - The custom frequency in milliseconds, applicable if frequency type is Custom.
 * @property {WeekStartDay} weekStartDay - The day of the week the streak is considered to start on. Defaults to Monday.
 * @property {boolean} countSamePeriod - Flag indicating whether to count occurrences within the same period towards the streak. For example, using a daily streak should two events on Monday count as a streak of 2 or 1? Defaults to false.
 */
export interface StreakConfig {
  frequencyType: FrequencyType;
  customFrequencyMS: number;
  weekStartDay: WeekStartDay;
  countSamePeriod: boolean;
}
