import { CreateStreakEventDto } from "../models/CreateStreakEvent.dto";
import { StreakEvent } from "../models/StreakEvent";
import { getAuthHeader } from "./auth-headers-helper";
import { get, post } from "./axios.http-service";

export async function getAllEventsForProject(
  projectId: string,
  apiKey: string
): Promise<StreakEvent[]> {
  const authHeader = await getAuthHeader(apiKey);
  const events = await get(`/events/project/${projectId}`, authHeader);

  return events;
}

export async function addEvent(
  event: CreateStreakEventDto,
  apiKey: string
): Promise<StreakEvent> {
  const authHeader = await getAuthHeader(apiKey);
  const newEvent = await post(
    `/events/project/${event.projectId}`,
    event,
    authHeader
  );

  return newEvent;
}

export async function getStreak(
  projectId: string,
  apiKey: string
): Promise<number> {
  const authHeader = await getAuthHeader(apiKey);
  const streak = await get(`/events/${projectId}/currentStreak/`, authHeader);

  return streak;
}

export async function getTimeUntilDueMs(
  userId: string,
  projectId: string,
  apiKey: string
): Promise<number> {
  const authHeader = await getAuthHeader(apiKey);
  const streak = await get(
    `/events/${projectId}/timeUntilDueMS/${userId}?frequencyType=weekly&customFrequencyMS=0&weekStartDay=Monday&countSamePeriod=true`,
    authHeader
  );

  return streak;
}

export async function getHistoryForStreak(
  projectId: string,
  apiKey: string
): Promise<StreakEvent[]> {
  const authHeader = await getAuthHeader(apiKey);
  const history = await get(`/events/${projectId}/history/`, authHeader);

  return history;
}
