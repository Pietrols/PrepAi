import type { Response } from "express";
import type { ApiSuccess, ApiError } from "@prepai/types";

export function sendSuccess<T>(res: Response, data: T, statusCode = 200): void {
  const body: ApiSuccess<T> = { success: true, data };
  res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  statusCode: number,
  code: string,
  message: string,
): void {
  const body: ApiError = { success: false, error: { code, message } };
  res.status(statusCode).json(body);
}
