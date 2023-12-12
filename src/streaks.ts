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

  constructor(apiKey: string, projectId: string) {
    this.apiKey = apiKey;
    this.projectId = projectId;
  }

  private async addEvent(event: CreateStreakEventDto): Promise<StreakEvent> {
    return addEvent(event, this.apiKey);
  }

  private async getStreak(config: StreakConfigDTO): Promise<number> {
    const streak = await getStreak(this.projectId, this.apiKey);
    return streak;
  }

  private async getHistory(): Promise<StreakEvent[]> {
    const history = await getHistoryForStreak(this.projectId, this.apiKey);
    return history;
  }
  private async getTimeUntilDueMs(userId: string): Promise<number> {
    return getTimeUntilDueMs(userId, this.projectId, this.apiKey);
  }
}
