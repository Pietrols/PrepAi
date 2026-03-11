// ─── User ────────────────────────────────────────────────────────────────────

export type UserPlan = "free" | "pro" | "enterprise";
export type UserRole = "user" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan: UserPlan;
  avatarUrl?: string;
  createdAt: string;
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

// ─── Modules ─────────────────────────────────────────────────────────────────

export type ModuleType =
  | "mcq"
  | "short_answer"
  | "live_coding"
  | "video_interview"
  | "troubleshooting"
  | "voice_interview"
  | "jd_tailored";

export type Domain =
  | "software_engineering"
  | "information_technology"
  | "electrical_engineering"
  | "mechanical_engineering";

export type DifficultyLevel = "junior" | "mid" | "senior" | "lead";

// ─── JD Mode ─────────────────────────────────────────────────────────────────

export type SkillImportance = "critical" | "important" | "bonus";

export interface JdSkill {
  name: string;
  importance: SkillImportance;
  category: string;
}

export interface JdProfile {
  id: string;
  userId: string;
  roleTitle: string;
  company?: string;
  seniorityLevel: DifficultyLevel;
  domain: Domain;
  skills: JdSkill[];
  responsibilities: string[];
  createdAt: string;
}
