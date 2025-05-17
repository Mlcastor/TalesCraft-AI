# Authentication System

This directory contains the core authentication system for the application. It provides a complete authentication solution that replaces the previous Clerk integration with a custom implementation that gives full control over the authentication flow.

## Architecture

The authentication system follows a layered architecture:

```
┌─────────────────┐
│      UI/UX      │  - Authentication UI components and pages
└────────┬────────┘
         │
┌────────▼────────┐
│  Auth Context   │  - React Context for state management
└────────┬────────┘
         │
┌────────▼────────┐
│  Auth Service   │  - Core authentication logic
└────────┬────────┘
         │
┌────────▼────────┐
│    Auth Utils   │  - Utility functions (JWT, password hashing)
└────────┬────────┘
         │
┌────────▼────────┐
│ User Repository │  - Database operations
└─────────────────┘
```

## Core Components

1. **Type Definitions** (`src/types/authTypes.ts`)
   - Defines TypeScript interfaces for authentication entities

2. **Authentication Service** (`src/lib/auth/authService.ts`)
   - Core business logic for authentication operations
   - Handles registration, login, password reset, etc.

3. **Authentication Context** (`src/lib/auth/authContext.tsx`)
   - React Context Provider for authentication state
   - Provides hooks for components to access auth state

4. **Session Storage** (`src/lib/auth/sessionStorage.ts`)
   - Manages client-side storage of authentication data
   - Handles cookies and localStorage

5. **Authentication Utilities** (`src/lib/utils/authUtils.ts`)
   - JWT token generation and validation
   - Password hashing and verification
   - Helper functions for authentication

6. **API Routes** (`src/app/api/auth/`)
   - RESTful API endpoints for authentication operations
   - Login, logout, register, password reset, etc.

7. **Middleware** (`src/middleware.ts`)
   - Route protection middleware
   - Validates authentication state for protected routes

## Usage

### Protecting Routes

The middleware automatically protects all routes that are not explicitly defined as public. You can add routes to the public routes list in `src/middleware.ts` to allow unauthenticated access.

### Using Authentication in Components

```tsx
import { useAuth, useUser, useAuthStatus } from '@/lib/auth/authContext';

// In your component:
const MyComponent = () => {
  // Get full auth context
  const { authState, login, logout, register } = useAuth();
  
  // Get just the user
  const user = useUser();
  
  // Get authentication status
  const { isAuthenticated, isLoading, error } = useAuthStatus();
  
  // Example login handler
  const handleLogin = async (email, password) => {
    const result = await login({ email, password });
    if (result.success) {
      // Handle successful login
    } else {
      // Handle error
    }
  };
  
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <div>
          <p>Welcome, {user?.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};
```

### Authentication API

The authentication API provides endpoints for:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/verify-email` - Verify email address

## Database Schema Extensions

The authentication system expects the following fields in the User model:

```prisma
model User {
  id                      String    @id @default(uuid())
  email                   String    @unique
  password                String?
  name                    String?
  emailVerified           Boolean   @default(false) @map("email_verified")
  verificationToken       String?   @map("verification_token")
  verificationTokenExpires DateTime? @map("verification_token_expires")
  resetPasswordToken      String?   @map("reset_password_token")
  resetPasswordExpires    DateTime? @map("reset_password_expires")
  lastLogin               DateTime? @map("last_login")
  createdAt               DateTime  @default(now()) @map("created_at")
  isActive                Boolean   @default(true) @map("is_active")
  preferences             Json      @default("{}")
  // Other fields...
}
```

You'll need to update your Prisma schema to include these fields and run a migration to apply the changes to your database. 