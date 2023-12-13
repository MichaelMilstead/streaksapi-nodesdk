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

  private async addEvent(event: CreateStreakEventDto): Promise<StreakEvent> {
    return addEvent(event, this.apiKey, this.baseUrl);
  }

  private async getStreak(config: StreakConfigDTO): Promise<number> {
    const streak = await getStreak(this.projectId, this.apiKey, this.baseUrl);
    return streak;
  }

  private async getHistory(): Promise<StreakEvent[]> {
    const history = await getHistoryForStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl
    );
    return history;
  }
  private async getTimeUntilDueMs(userId: string): Promise<number> {
    return getTimeUntilDueMs(userId, this.projectId, this.apiKey, this.baseUrl);
  }
}
