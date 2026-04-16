# PrepAI - Intelligent Interview Practice Platform

An open-source, AI-powered interview preparation platform for software engineers,
IT professionals, and engineering disciplines.

## What is PrepAI?

PrepAI simulates real interview conditions across six practice formats:

- **Multiple Choice** - domain-specific questions with instant feedback
- **Short Answer** - AI-evaluated written responses
- **Live Coding** - Monaco editor with sandboxed code execution (Judge0)
- **AI Video Interview** - 5–10 min WebRTC session with an AI agent
- **Troubleshooting Scenarios** - engineering fault-finding with AI-generated diagrams
- **JD-Tailored Mode** - upload a real job description, get a personalised prep programme

## Tech Stack

| Layer          | Technology                                           |
| -------------- | ---------------------------------------------------- |
| Web            | React 19 + Vite + TypeScript                         |
| Mobile         | React Native + Expo                                  |
| API            | Node.js + Express + TypeScript                       |
| Database       | PostgreSQL + Prisma                                  |
| Cache / Queues | Redis + BullMQ                                       |
| Real-time      | Socket.io + WebRTC                                   |
| AI             | OpenAI GPT-4o, Gemini 3, Claude, ElevenLabs, Whisper |
| Monorepo       | Turborepo                                            |

## Getting Started (Development)

```bash
git clone https://github.com/YOUR_USERNAME/prepai.git
cd prepai
npm install
npm run dev
```

Full local setup guide: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

## Contributing

We welcome contributions. Read [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
Check the [Issues](https://github.com/YOUR_USERNAME/prepai/issues) tab for open tasks
tagged `help wanted` and `good first issue`.

## Platform Design

Full platform specification: [docs/PLATFORM_DESIGN.md](docs/PLATFORM_DESIGN.md)

## License

MIT

Made with Love
