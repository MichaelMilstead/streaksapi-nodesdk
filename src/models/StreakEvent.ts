/**
 * Represents an event in a streak.
 *
 * @interface StreakEvent
 * @property {string} id - Unique identifier of the event.
 * @property {string} projectId - Identifier of the project associated with this event.
 * @property {string} userId - Identifier of the user who created or is associated with this event.
 * @property {string} timestampISO - ISO format timestamp indicating when the event occurred.
 */
export interface StreakEvent {
  id: string;
  projectId: string;
  userId: string;
  timestampISO: string;
}
