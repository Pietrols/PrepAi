import { Router } from "express";
import { sendSuccess } from "../types/api";
import { env } from "../config/env";

const router = Router();

router.get("/", (_req, res) => {
  sendSuccess(res, {
    status: "ok",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
    version: "0.0.1",
  });
});

export default router;
