# Health AI

LLM-powered health insights platform with chat, workflows, RAG, and agent capabilities. An MVP inspired by [Dify](https://github.com/langgenius/dify).

## Features

✅ **Chat Interface & Conversations** - Real-time AI-powered health consultations

✅ **Prompt IDE** - Design and test prompts for optimal AI responses

✅ **Workflow Builder** - Visual workflow creation for complex health AI processes

✅ **RAG Pipeline** - Knowledge retrieval from medical documents and research

✅ **Agent Framework** - Autonomous AI agents for health task automation

✅ **Multi-Model Provider Support** - Connect to 100+ LLM providers (OpenAI, Anthropic, etc.)

✅ **LLMOps & Monitoring** - Track performance, logs, and analytics

✅ **Backend-as-a-Service API** - RESTful APIs for integration

## Tech Stack

### Frontend
- **Next.js 15.5.9** - React framework
- **React 19.2.3** - UI library
- **ReactFlow 11.11.4** - Visual workflow builder
- **Zustand 5.0.9** - State management
- **Tailwind CSS 3.4.18** - Styling
- **SWR 2.3.6** - Data fetching

### Backend
- **Flask 3.1.2** - Web framework
- **SQLAlchemy 2.0.29** - ORM
- **Celery 5.5.2** - Task queue
- **LiteLLM 1.77.1** - Unified LLM API
- **LangChain** - LLM orchestration
- **PostgreSQL** - Database
- **Redis 6.1.0** - Caching & messaging
- **Weaviate 4.17.0** - Vector database

## Quick Start

### Prerequisites

- Node.js >= 22.11.0
- Python >= 3.11
- PostgreSQL
- Redis
- Docker (optional)

### Installation

#### Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/haniakrim21/health-ai.git
cd health-ai

# Copy environment variables
cp .env.example .env

# Edit .env and add your API keys
# OPENAI_API_KEY=sk-...

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# API: http://localhost:5001
```

#### Manual Setup

**Backend:**

```bash
cd api

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up database
export DATABASE_URL="postgresql://postgres:password@localhost:5432/healthai"
export OPENAI_API_KEY="your-key-here"

# Run migrations (create tables)
python -c "from app import app, db; app.app_context().push(); db.create_all()"

# Start API server
python app.py
```

**Frontend:**

```bash
cd web

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
```

**Services:**

Ensure PostgreSQL, Redis, and Weaviate are running:

```bash
# PostgreSQL
psql -U postgres -c "CREATE DATABASE healthai;"

# Redis
redis-server

# Weaviate (Docker)
docker run -d -p 8080:8080 semitechnologies/weaviate:1.22.4
```

### Configuration

Edit `.env` file with your configuration:

```env
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
DATABASE_URL=postgresql://user:pass@localhost:5432/healthai
REDIS_URL=redis://localhost:6379/0
WEAVIATE_URL=http://localhost:8080
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                      │
│  Chat │ Prompt IDE │ Workflow │ RAG │ Agent │ Monitor      │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────────┐
│                    Backend (Flask)                          │
│  Routes │ Services │ Database │ Celery Tasks               │
└───┬─────────┬─────────┬──────────┬────────────────────────┘
    │         │         │          │
┌───▼───┐ ┌──▼──┐  ┌───▼────┐ ┌──▼────────┐
│ LLMs  │ │Redis│  │Postgres│ │  Weaviate │
│OpenAI │ │     │  │        │ │  (Vector) │
└───────┘ └─────┘  └────────┘ └───────────┘
```

## API Documentation

### Authentication

```bash
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password"
}
```

### Chat

```bash
POST /api/chat
Authorization: Bearer <token>
{
  "message": "What are symptoms of flu?"
}
```

### Workflow Execution

```bash
POST /api/workflow/{id}/run
Authorization: Bearer <token>
{
  "inputs": {"patient_data": "..."}
}
```

### RAG Search

```bash
POST /api/rag/search
Authorization: Bearer <token>
{
  "query": "treatment for headache",
  "top_k": 5
}
```

### Agent Execution

```bash
POST /api/agent/{id}/run
Authorization: Bearer <token>
{
  "task": "Analyze patient symptoms"
}
```

## Development

### Project Structure

```
health-ai/
├── web/                    # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── lib/              # Utilities
│   └── public/           # Static assets
├── api/                   # Flask backend
│   ├── routes/           # API endpoints
│   ├── services/         # Business logic
│   ├── models.py         # Database models
│   └── app.py           # Application entry
├── docker-compose.yml    # Docker configuration
└── README.md
```

### Adding New Features

1. **Frontend**: Add page in `web/app/` and components in `web/components/`
2. **Backend**: Create route in `api/routes/` and service in `api/services/`
3. **Database**: Add model in `api/models.py`

### Testing

```bash
# Backend tests
cd api
pytest

# Frontend tests
cd web
npm test
```

## Production Deployment

### Environment Variables

Set production environment variables:

```env
SECRET_KEY=<strong-random-key>
DATABASE_URL=<production-db-url>
OPENAI_API_KEY=<your-key>
```

### Build & Deploy

```bash
# Build frontend
cd web
npm run build

# Deploy with Docker
docker-compose -f docker-compose.prod.yml up -d
```

## Contributing

Contributions are welcome! This is an MVP and there's lots to improve:

- Implement full workflow execution engine
- Add more LLM providers
- Enhance RAG with chunking strategies
- Add agent tool library
- Implement user authentication
- Add comprehensive tests

## License

MIT License - see LICENSE file for details

## Acknowledgments

Inspired by [Dify](https://github.com/langgenius/dify) - an excellent open-source LLM application platform.

## Support

For issues and questions:
- GitHub Issues: https://github.com/haniakrim21/health-ai/issues

---

Built with ❤️ for the health AI community
