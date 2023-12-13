export interface CreateStreakEventDto {
  projectId: string;
  userId: string;
  streakId?: string;
  timestampISO: string;
}
