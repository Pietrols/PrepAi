# Contributing to PrepAI

Thank you for your interest in contributing. This document covers everything
you need to get started.

## Stack knowledge needed

Contributions are welcome across all skill levels. Here is what the codebase uses:

- **TypeScript** - used everywhere, no plain JS
- **React 19 + Vite** - web frontend
- **React Native + Expo** - mobile
- **Node.js + Express** - API
- **PostgreSQL + Prisma** - database
- **Redis** - caching and queues

You do not need to know all of these. Pick an area that matches your skills.

## How to contribute

1. **Find an issue** - browse Issues tagged `help wanted` or `good first issue`
2. **Comment on it** - say you'd like to work on it so it can be assigned to you
3. **Fork the repo** and create a branch: `git checkout -b feat/your-feature-name`
4. **Build it** following the patterns already in the codebase
5. **Open a PR** - fill in the PR template, link the issue

## Branch naming

| Type          | Format                       |
| ------------- | ---------------------------- |
| Feature       | `feat/short-description`     |
| Bug fix       | `fix/short-description`      |
| Documentation | `docs/short-description`     |
| Refactor      | `refactor/short-description` |

## Commit style

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add JD URL scraping endpoint
fix: correct JWT refresh token expiry
docs: update API route table in README
chore: bump turbo to 2.3.3
```

## Code standards

- TypeScript strict mode - no `any`, no suppressed errors
- All new API endpoints need a corresponding type in `packages/types`
- No direct AI calls from frontend - all AI goes through the backend
- Every PR should include a brief description of what was changed and why

## Areas that always need help

- Question bank content (domain experts welcome)
- Engineering scenario writing (IT, electrical, mechanical)
- UI/UX improvements
- Test coverage
- Documentation

## Questions?

Open a Discussion on GitHub or drop a message in the Issues thread.
