# PrepAI - Platform Design Specification v2.0

This document describes the full platform architecture, module design,
technology stack, and build roadmap for PrepAI.

> The full specification is available as a formatted Word document:
> [PrepAI_Platform_Design_v2.0.docx](./PrepAI_Platform_Design_v2.0.docx)

## Quick Reference

### Six Core Interview Modules

1. Multiple Choice Questions (MCQ)
2. AI-Evaluated Short Answer
3. Live Coding (Judge0 sandboxed execution)
4. AI Video Interview Agent (WebRTC + GPT-4o)
5. Scenario-Based Troubleshooting (engineering/IT domains)
6. Domain Live Voice Interview

### Plus

7. **JD-Tailored Mode** - upload a real job description, every module
   becomes personalised to that role

### Stack Summary

- Turborepo monorepo (web + mobile + api + shared packages)
- React 19 + Vite | React Native + Expo
- Node.js + Express + PostgreSQL + Prisma + Redis
- OpenAI GPT-4o, Anthropic Claude, ElevenLabs, Whisper, DALL-E 3
- Stripe (payment infrastructure, dormant at launch)

Full detail in the Word document linked above.
