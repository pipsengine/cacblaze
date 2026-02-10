# CACBlaze Monorepo

This project is a modern, professional, secured, and robust monorepo structure for CACBlaze.

## Structure

- **client**: The Next.js frontend application.
- **server**: The Node.js/Express backend application with SQLite database.
- **shared**: Shared TypeScript types and utilities.
- **infrastructure**: Deployment configurations (Docker).

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

Run the following command in the root directory to install dependencies for all workspaces:

```bash
npm install
```

### Running the Project

To run both client and server simultaneously (Recommended):

```bash
npm run dev
```

This will start:
- **Server** on `http://localhost:3001`
- **Client** on `http://localhost:4028`

To run them separately:

**Server:**
```bash
npm run dev -w @cacblaze/server
```

**Client:**
```bash
npm run dev -w @cacblaze/client
```

## Database

The project uses SQLite. The database file is located at `server/database/cacblaze.db`.
On the first run, the server will seed an admin user with the following credentials:
- Username: `cacblaze`
- Password: `@dm1n.c0m`

## API Routes

The server exposes API routes under `/api`.
- Auth: `/api/auth/login`

## Deployment

Infrastructure files including Dockerfiles and Docker Compose configuration are located in the `infrastructure` directory.
