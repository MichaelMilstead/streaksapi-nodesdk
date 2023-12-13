import { CreateStreakEventDto } from "../models/CreateStreakEvent.dto";
import { StreakConfigDTO } from "../models/StreakConfig";
import { StreakEvent } from "../models/StreakEvent";
import { getAuthHeader } from "./auth-headers-helper";
import { get, post } from "./axios.http-service";

export async function getAllEventsForProject(
  projectId: string,
  apiKey: string,
  baseUrl: string
): Promise<StreakEvent[]> {
  const authHeader = await getAuthHeader(apiKey);
  const events = await get(
    `${baseUrl}/events/project/${projectId}`,
    authHeader
  );

  return events;
}

export async function addEvent(
  event: CreateStreakEventDto,
  apiKey: string,
  baseUrl: string
): Promise<StreakEvent> {
  const authHeader = await getAuthHeader(apiKey);
  const newEvent = await post(
    `${baseUrl}/events/project/${event.projectId}`,
    event,
    authHeader
  );

  return newEvent;
}

export async function getStreak(
  projectId: string,
  apiKey: string,
  baseUrl: string,
  config: StreakConfigDTO,
  streakId?: string
): Promise<number> {
  const authHeader = await getAuthHeader(apiKey);
  const streak = await get(
    `${baseUrl}/events/${projectId}/currentStreak${
      streakId ? `/${streakId}` : ``
    }?frequencyType=${config.frequencyType}&customFrequencyMS=${
      config.customFrequencyMS
    }&weekStartDay=${config.weekStartDay}&countSamePeriod=${
      config.countSamePeriod
    }`,
    authHeader
  );

  return streak;
}

export async function getTimeUntilDueMs(
  projectId: string,
  apiKey: string,
  baseUrl: string,
  config: StreakConfigDTO,
  streakId?: string
): Promise<number> {
  const authHeader = await getAuthHeader(apiKey);
  const streak = await get(
    `${baseUrl}/events/${projectId}/timeUntilDueMS${
      streakId ? `/${streakId}` : ``
    }?frequencyType=${config.frequencyType}&customFrequencyMS=${
      config.customFrequencyMS
    }&weekStartDay=${config.weekStartDay}&countSamePeriod=${
      config.countSamePeriod
    }`,
    authHeader
  );

  return streak;
}

export async function getHistoryForStreak(
  projectId: string,
  apiKey: string,
  baseUrl: string,
  streakId?: string
): Promise<StreakEvent[]> {
  const authHeader = await getAuthHeader(apiKey);
  const history = await get(
    `${baseUrl}/events/${projectId}/history${streakId ? `/${streakId}` : ``}`,
    authHeader
  );

  return history;
}
