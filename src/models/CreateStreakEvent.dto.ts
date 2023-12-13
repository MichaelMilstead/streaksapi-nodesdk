/**
 * Data Transfer Object for creating a new streak event.
 *
 * @interface CreateStreakEventDto
 * @property {string} projectId - Identifier of the project associated with the streak event.
 * @property {string} userId - Identifier of the user creating the streak event.
 * @property {string} [streakId] - Optional identifier of the streak to which the event belongs. Default is 'default'.
 * @property {string} timestampISO - ISO format timestamp indicating when the event is created or should occur.
 */
export interface CreateStreakEventDto {
  projectId: string;
  userId: string;
  streakId?: string;
  timestampISO: string;
}
