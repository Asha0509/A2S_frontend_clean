# A2S - Aesthetics to Spaces Landing Page

## Overview

A2S (Aesthetics to Spaces) is a comprehensive property management and interior design platform that bridges the gap between property discovery, visualization, and management. The application provides a multi-tiered service offering targeting both individual consumers and business clients with features ranging from basic property search and 2.5D room design to advanced AR/VR property management and AI-powered tenant screening.

The platform serves as a marketplace connecting property seekers with verified listings, interior designers, and various service vendors while providing sophisticated tools for property visualization, predictive maintenance, and tenant management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **UI Framework**: Utilizes **shadcn/ui** component library built on **Radix UI** primitives for consistent, accessible design components
- **Styling**: **Tailwind CSS** with custom CSS variables for theming, supporting both light and dark modes
- **Routing**: **Wouter** for lightweight client-side routing
- **State Management**: **TanStack Query (React Query)** for server state management and caching
- **Forms**: **React Hook Form** with **Zod** validation for type-safe form handling
- **Build Tool**: **Vite** for fast development and optimized production builds

The architecture emphasizes modularity with clear separation between pages, components, and business logic. Components are organized into UI primitives, feature-specific components, and page-level components.

### Backend Architecture
The backend follows a **Node.js** and **Express.js** REST API pattern:

- **Runtime**: **Node.js** with **TypeScript** for type safety
- **Framework**: **Express.js** for HTTP server and middleware
- **API Design**: RESTful endpoints with JSON request/response format
- **Validation**: **Zod** schemas shared between frontend and backend for consistent data validation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reloading with **tsx** for TypeScript execution

The server implements a layered architecture with route handlers, storage abstraction, and proper separation of concerns.

### Data Storage Solutions
The application uses **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations:

- **Database**: **PostgreSQL** with support for advanced features like UUID generation
- **ORM**: **Drizzle ORM** for schema definition, migrations, and type-safe queries
- **Schema Management**: Code-first approach with TypeScript schema definitions
- **Migrations**: Automated migration system through Drizzle Kit
- **Development Storage**: In-memory storage implementation for development/testing

The database schema includes tables for users, user waitlists, and vendor waitlists with proper typing and validation.

### Authentication and Authorization
Currently implements a basic user system foundation:

- **User Management**: Basic user schema with username/password fields
- **Session Handling**: Prepared for session-based authentication with **connect-pg-simple**
- **Security**: Password storage considerations built into schema design

The authentication system is designed to be extensible for future OAuth integration and role-based access control.

## External Dependencies

### Database Services
- **Neon Database** (`@neondatabase/serverless`): Serverless PostgreSQL database hosting
- **PostgreSQL**: Primary database engine for persistent data storage

### UI and Design Systems
- **Radix UI**: Comprehensive collection of low-level UI primitives for building design systems
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **Replit Plugins**: Development environment integration for hot reloading and error handling

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **TanStack Query**: Server state management and caching solution
- **Zod**: Schema validation library for runtime type checking

### Additional Utilities
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility
- **Wouter**: Minimalist routing library for React

The application is structured to support both development and production environments with appropriate tooling for each context. The use of shared TypeScript types between frontend and backend ensures type safety across the entire stack.