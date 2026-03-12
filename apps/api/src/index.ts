import express from "express";
import { env } from "./config/env";
import { requestLogger } from "./middleware/requestLogger";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import apiRouter from "./routes/index";

const app = express();

// ─── Core middleware ──────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use("/api/v1", apiRouter);

// ─── 404 + error handler (must be last) ──────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(env.PORT, () => {
  console.log(`PrepAI API running`);
  console.log(`   Environment : ${env.NODE_ENV}`);
  console.log(`   Port        : ${env.PORT}`);
  console.log(`   Health      : http://localhost:${env.PORT}/api/v1/health\n`);
});

export default app;
