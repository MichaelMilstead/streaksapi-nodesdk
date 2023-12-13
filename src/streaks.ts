import { CreateStreakEventDto } from "./models/CreateStreakEvent.dto";
import { StreakConfigDTO } from "./models/StreakConfig";
import { StreakEvent } from "./models/StreakEvent";
import {
  addEvent,
  getHistoryForStreak,
  getStreak,
  getTimeUntilDueMs,
} from "./services/events.service";

/**
 * Streaks class for managing streak events.
 */
export class Streaks {
  private apiKey: string;
  private projectId: string;
  private baseUrl: string;

  /**
   * Creates a new instance of Streaks.
   *
   * @param {string} apiKey - The API key for authentication.
   * @param {string} projectId - The project ID for which the streaks are managed.
   * @param {string} [baseUrl="https://api.streaksapi.com"] - The base URL of the Streaks API.
   */
  constructor(
    apiKey: string,
    projectId: string,
    baseUrl = "https://api.streaksapi.com"
  ) {
    this.apiKey = apiKey;
    this.projectId = projectId;
    this.baseUrl = baseUrl;
  }

  /**
   * Adds a new event to a streak.
   *
   * @param {CreateStreakEventDto} event - The event to be added.
   * @returns {Promise<StreakEvent>} A promise that resolves to the added StreakEvent.
   */
  async addEvent(event: CreateStreakEventDto): Promise<StreakEvent> {
    return addEvent(event, this.apiKey, this.baseUrl);
  }

  /**
   * Retrieves a specific streak.
   *
   * @param {StreakConfigDTO} config - The configuration object for the streak.
   * @param {string} [streakId] - The optional ID of the streak. Default is 'default'.
   * @returns {Promise<number>} A promise that resolves to the streak.
   */
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

  /**
   * Retrieves the history of events for a given streak.
   *
   * @param {string} [streakId] - The optional ID of the streak. Default is 'default'.
   * @returns {Promise<StreakEvent[]>} A promise that resolves to an array of StreakEvents.
   */
  async getHistory(streakId?: string): Promise<StreakEvent[]> {
    const history = await getHistoryForStreak(
      this.projectId,
      this.apiKey,
      this.baseUrl,
      streakId
    );
    return history;
  }

  /**
   * Gets the time in milliseconds until the next event is due for a streak.
   *
   * @param {StreakConfigDTO} config - The configuration object for the streak.
   * @param {string} [streakId] - The optional ID of the streak. Default is 'default'.
   * @returns {Promise<number>} A promise that resolves to the number of milliseconds until the next event is due.
   */
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

  /**
   * Calculates the due date of the next event for a streak.
   *
   * @param {StreakConfigDTO} config - The configuration object for the streak.
   * @param {string} [streakId] - The optional ID of the streak. Default is 'default'.
   * @returns {Promise<Date>} A promise that resolves to the Date when the next event is due.
   */
  async getDueDate(config: StreakConfigDTO, streakId?: string): Promise<Date> {
    const msUntilDue = await this.getTimeUntilDueMs(config, streakId);
    const now = new Date();
    const dueDate = new Date(now.getTime() + msUntilDue);
    return dueDate;
  }
}
