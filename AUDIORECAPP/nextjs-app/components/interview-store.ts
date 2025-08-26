export interface InterviewSession {
  id: string;
  title: string;
  audioUrl: string;
  transcript: string;
  timestamp: number;
}

export function saveSession(session: InterviewSession) {
  const allSessions = getSessions();
  allSessions.push(session);
  localStorage.setItem('interviewSessions', JSON.stringify(allSessions));
}

export function getSessions(): InterviewSession[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('interviewSessions');
  return stored ? JSON.parse(stored) : [];
}
