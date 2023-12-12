export enum FrequencyType {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Custom = "custom",
}

export enum WeekStartDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export interface StreakConfigDTO {
  frequencyType: FrequencyType;
  customFrequencyMS: number;
  weekStartDay: WeekStartDay;
  countSamePeriod: boolean;
}
