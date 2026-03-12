import type { Request, Response, NextFunction } from "express";
import { sendError } from "../types/api";
import { env } from "../config/env";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  console.error(`[Error] ${req.method} ${req.path}:`, err.message);

  if (env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  sendError(res, 500, "INTERNAL_ERROR", "An unexpected error occurred");
}
