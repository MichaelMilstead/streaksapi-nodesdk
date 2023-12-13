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

  async getStreak(config: StreakConfigDTO): Promise<number> {
    const streak = await getStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl,
      config
    );
    return streak;
  }

  async getHistory(): Promise<StreakEvent[]> {
    const history = await getHistoryForStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl
    );
    return history;
  }

  async getTimeUntilDueMs(
    userId: string,
    config: StreakConfigDTO
  ): Promise<number> {
    return getTimeUntilDueMs(
      userId,
      this.projectId,
      this.apiKey,
      this.baseUrl,
      config
    );
  }
}
