# Backend Structure Documentation

> **Note**: This document captures the backend structure as of December 27, 2025.

## Overview

The backend is a **Node.js/Express** application using **TypeScript** that provides a REST API for accessing game metadata and statistics. It uses **PostgreSQL** (via Supabase) as the database and **Knex.js** as the query builder.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express 5.1.0
- **Language**: TypeScript 5.9.3
- **Database**: PostgreSQL (Supabase)
- **Query Builder**: Knex 3.1.0
- **Validation**: Zod 4.1.13
- **HTTP Client**: Axios 1.13.2
- **Development**: tsx (TypeScript executor)

## Project Structure

```
src/backend/
├── src/
│   ├── api/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # Route definitions
│   │   └── schemas/        # Zod validation schemas
│   ├── config/             # Configuration
│   ├── database/           # Database connection
│   ├── errors/             # Custom error classes
│   ├── middlewares/        # Express middlewares
│   ├── repositories/       # Data access layer
│   ├── services/           # Business logic layer
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── server.ts           # Application entry point
├── package.json
├── tsconfig.json
├── Dockerfile
└── .env
```

## Directory Details

### `/src/api/`

API layer containing routes, controllers, and validation schemas.

#### **Controllers** (`api/controllers/`)

- `metadata.controller.ts` - Handles metadata requests
- `stats.controller.ts` - Handles statistics requests

#### **Routes** (`api/routes/`)

- `metadata.routes.ts` - Metadata endpoint routing
- `stats.routes.ts` - Statistics endpoint routing

#### **Schemas** (`api/schemas/`)

- `metadata.schema.ts` - Zod schemas for metadata validation
- `stats.schema.ts` - Zod schemas for stats validation

### `/src/config/`

Configuration management using environment variables.

- `env.config.ts` - Environment configuration with Zod validation
  - PORT (default: 3000)
  - SUPABASE_HOST
  - SUPABASE_PORT (default: 5432)
  - SUPABASE_USER
  - SUPABASE_PASSWORD
  - SUPABASE_DB
  - NODE_ENV

### `/src/database/`

Database connection setup.

- `db.ts` - Knex PostgreSQL connection configuration
  - Connects to Supabase PostgreSQL database
  - SSL enabled with `rejectUnauthorized: false`
  - Connection pool: min=0, max=5

### `/src/errors/`

Custom error classes for standardized error handling.

- `AppError.ts` - Base error class
- `BadRequestError.ts` - 400 errors
- `UnauthorizedError.ts` - 401 errors
- `ForbiddenError.ts` - 403 errors
- `NotFoundError.ts` - 404 errors
- `ValidationError.ts` - Validation errors
- `index.ts` - Exports all error classes

### `/src/middlewares/`

Express middleware functions.

- `error.middleware.ts` - Global error handler and 404 handler
- `validate.middleware.ts` - Request validation middleware using Zod

### `/src/repositories/`

Data access layer - abstracts database queries.

- `comp.repository.ts` - Composition data queries
- `item.repository.ts` - Item data queries
  - `getAllItems(season?: number)` - Fetch items with optional season filter
- `stats.repository.ts` - Statistics data queries
- `trait.repository.ts` - Trait data queries
- `unit.repository.ts` - Unit data queries

### `/src/services/`

Business logic layer - orchestrates repositories and implements business rules.

- `metadata.service.ts` - Metadata business logic
- `stats.service.ts` - Statistics business logic

### `/src/types/`

TypeScript type definitions.

- `metadata.type.ts` - Metadata type definitions
- `stats.type.ts` - Statistics type definitions

### `/src/utils/`

Utility functions and constants.

- `constants.util.ts` - Application constants
- `logger.util.ts` - Logging utilities
- `response.util.ts` - Response formatting utilities

### `/src/server.ts`

Main application entry point.

```typescript
- Initializes Express app
- Configures CORS
- Registers routes:
  - /metadata → metadataRouter
  - /stats/ → statsRouter
- Registers error handlers
- Starts server on configured PORT
```

## Architecture Pattern

The application follows a **layered architecture**:

```
Routes → Controllers → Services → Repositories → Database
         ↓
      Validation (Middleware + Zod Schemas)
         ↓
      Error Handling (Custom Errors)
```

### Layer Responsibilities

1. **Routes** - Define API endpoints and attach validation middleware
2. **Controllers** - Handle HTTP request/response, call services
3. **Services** - Implement business logic, orchestrate repositories
4. **Repositories** - Execute database queries using Knex
5. **Database** - PostgreSQL connection via Knex

### Cross-Cutting Concerns

- **Validation**: Zod schemas validate request data in middleware
- **Error Handling**: Custom error classes with centralized error middleware
- **Configuration**: Environment-based configuration with validation
- **Utilities**: Shared functionality (logging, response formatting, constants)

## API Endpoints

### Metadata

- `GET /metadata` - Query parameter validation via `metadataQuerySchema`

### Stats

- `GET /stats/` - Query parameter validation via `statsQuerySchema`

## Database Tables

Based on the repositories, the following tables are accessed:

- `static_items` - Game items (with season field)
- Composition-related tables (via `comp.repository.ts`)
- Trait-related tables (via `trait.repository.ts`)
- Unit-related tables (via `unit.repository.ts`)
- Statistics tables (via `stats.repository.ts`)

## Development Scripts

```bash
npm run dev      # Run development server with watch mode (tsx)
npm run build    # Compile TypeScript to JavaScript
npm start        # Run production build
npm test         # No tests configured yet
```

## Key Features

1. **Type Safety**: Full TypeScript coverage
2. **Request Validation**: Zod schemas for runtime type checking
3. **Error Handling**: Structured error classes with middleware
4. **Database Layer**: Knex query builder for PostgreSQL
5. **Configuration**: Environment-based with validation
6. **CORS**: Enabled for cross-origin requests
7. **Development DX**: Hot reload with tsx watch mode

## Environment Requirements

Required environment variables:

- `PORT` - Server port (optional, defaults to 3000)
- `SUPABASE_HOST` - Supabase database host
- `SUPABASE_PORT` - Database port (optional, defaults to 5432)
- `SUPABASE_USER` - Database username
- `SUPABASE_PASSWORD` - Database password
- `SUPABASE_DB` - Database name
- `NODE_ENV` - Environment (development/production)

## Notes

- The backend uses **Supabase** as the PostgreSQL provider
- All database queries use **Knex.js** query builder (no raw SQL or ORM)
- **Zod** provides both runtime validation and TypeScript type inference
- Error handling follows a consistent pattern with custom error classes
- The application is containerized (Dockerfile present)
