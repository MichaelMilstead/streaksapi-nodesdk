import { CreateStreakEventDto } from "./models/CreateStreakEvent.dto";
import { StreakConfigDTO } from "./models/StreakConfig";
import { StreakEvent } from "./models/StreakEvent";
import {
  addEvent,
  getHistoryForStreak,
  getStreak,
  getTimeUntilDueMs,
} from "./services/events.service";

export class Streaks {
  private apiKey: string;
  private projectId: string;
  private baseUrl: string;

  constructor(
    apiKey: string,
    projectId: string,
    baseUrl = "https://api.streaksapi.com"
  ) {
    this.apiKey = apiKey;
    this.projectId = projectId;
    this.baseUrl = baseUrl;
  }

  async addEvent(event: CreateStreakEventDto): Promise<StreakEvent> {
    return addEvent(event, this.apiKey, this.baseUrl);
  }

  async getStreak(config: StreakConfigDTO, streakId?: string): Promise<number> {
    const streak = await getStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl,
      config,
      streakId
    );
    return streak;
  }

  async getHistory(streakId?: string): Promise<StreakEvent[]> {
    const history = await getHistoryForStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl,
      streakId
    );
    return history;
  }

  async getTimeUntilDueMs(
    config: StreakConfigDTO,
    streakId?: string
  ): Promise<number> {
    return getTimeUntilDueMs(
      this.projectId,
      this.apiKey,
      this.baseUrl,
      config,
      streakId
    );
  }

  async getDueDate(config: StreakConfigDTO, streakId?: string): Promise<Date> {
    const msUntilDue = await this.getTimeUntilDueMs(config, streakId);
    const now = new Date();
    const dueDate = new Date(now.getTime() + msUntilDue);
    return dueDate;
  }
}
