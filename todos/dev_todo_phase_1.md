# Phase 1: Foundational Setup (Environment & Tooling)

This document outlines the granular tasks for setting up the project's foundational environment and tooling.

---

## Group: Set up Cloud Infrastructure

- [ ] **Task 1: Create Supabase Project**
    - **(LLM Prompt):** "Open a web browser and navigate to `https://supabase.com`. Click 'Sign in' or 'Sign up' and complete the process. Then click 'New project', select your organization, enter 'Project Nexus' as the name, generate and securely save a database password, select the nearest region, and click 'Create new project'."
    - **(Verification):** "Supabase dashboard shows 'Project Nexus' in the projects list with status 'Active'."

- [ ] **Task 2: Configure Supabase API**
    - **(LLM Prompt):** "In the Supabase dashboard, click the gear icon for 'Project Settings', then click the 'API' tab. Copy the 'Project URL' value as SUPABASE_URL and the 'anon public' key as SUPABASE_KEY."
    - **(Verification):** "Both SUPABASE_URL and SUPABASE_KEY values are copied to clipboard."

- [ ] **Task 3: Create Storage Bucket**
    - **(LLM Prompt):** "In Supabase dashboard, click 'Storage' in left menu, then 'New bucket'. Enter 'assessment-uploads' as bucket name, set to public access, and click 'Create bucket'."
    - **(Verification):** "Bucket named 'assessment-uploads' appears in Supabase storage list."

## Group: Configure Vercel Environment

- [ ] **Task 4: Create Vercel Project**
    - **(LLM Prompt):** "Open a new browser tab and navigate to `https://vercel.com`. Click 'Sign in' or 'Sign up' and complete the process with GitHub. Click 'Add New Project' and select the 'Project Nexus' repository."
    - **(Verification):** "Vercel project dashboard shows 'Project Nexus' repository connected."

- [ ] **Task 5: Set Environment Variables**
    - **(LLM Prompt):** "In Vercel project settings, expand 'Environment Variables' section. Add new variable named 'SUPABASE_URL' and paste the value from Supabase. Add new variable named 'SUPABASE_KEY' and paste the value from Supabase."
    - **(Verification):** "Both SUPABASE_URL and SUPABASE_KEY appear in Vercel environment variables list."

- [ ] **Task 6: Configure Additional Variables**
    - **(LLM Prompt):** "Open `docs/devops/Environment_Variable_Manifest.md`. For each variable listed, add it to Vercel environment variables with a placeholder value."
    - **(Verification):** "All variables from the manifest appear in Vercel environment variables list."

## Group: Establish Local Development Environment

- [ ] **Task 7: Create docker-compose.app.yml**
    - **(LLM Prompt):** "Open `docs/architecture/System_Architecture_Design.md` and copy the app configuration section. Create `docker-compose.app.yml` in root directory and paste the configuration."
    - **(Verification):** "File `docker-compose.app.yml` exists in root directory with content matching the architecture document."

- [ ] **Task 8: Create nginx/proxy.conf**
    - **(LLM Prompt):** "Create directory `nginx` in root directory. Create file `nginx/proxy.conf` with content:
```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://app:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```"
    - **(Verification):** "File `nginx/proxy.conf` exists with the specified content."

- [ ] **Task 9: Create docker-compose.proxy.yml**
    - **(LLM Prompt):** "Create file `docker-compose.proxy.yml` in root directory with content:
```yaml
version: '3'
services:
  nginx:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./nginx/proxy.conf:/etc/nginx/conf.d/default.conf
    networks:
      - app-network
    depends_on:
      - app

networks:
  app-network:
    driver: bridge
```"
    - **(Verification):** "File `docker-compose.proxy.yml` exists with the specified content."

- [ ] **Task 10: Configure environment variables**
    - **(LLM Prompt):** "Copy `.env.example` to `.env.local`. Open `.env.local` and update Supabase credentials (SUPABASE_URL and SUPABASE_KEY) with values from your Supabase project."
    - **(Verification):** "File `.env.local` exists and contains updated Supabase credentials."

- [ ] **Task 11: Start Docker containers**
     - **(Context):** The current working directory **must** be `project-nexus`.
     - **(LLM Prompt):** "Run command: `docker compose -f docker-compose.app.yml -f docker-compose.proxy.yml up -d --build`"
     - **(Verification):** "Command runs without errors and containers are running (check with `docker ps`)."

- [ ] **Task 12: Verify setup**
     - **(LLM Prompt):** "Open web browser and navigate to `http://localhost:8080`"
     - **(Verification):** "Application homepage is visible in browser."

- [ ] **Task 13: Stop containers (optional)**
    - **(Context):** The current working directory **must** be `project-nexus`.
    - **(LLM Prompt):** "Run command: `docker compose down`"
    - **(Verification):** "Containers are stopped (check with `docker ps`)."

## Group: Define Core Data Structures

- [ ] **Task 14: Create Prisma Schema File**
    - **(LLM Prompt):** "Create directory `prisma` in root directory. Create file `prisma/schema.prisma` and open it in a text editor."
    - **(Verification):** "File `prisma/schema.prisma` exists and is empty."

- [ ] **Task 15: Copy Database Schema**
    - **(LLM Prompt):** "Open `docs/architecture/Database_Schema.prisma`, copy its entire content, and paste it into `prisma/schema.prisma`."
    - **(Verification):** "`prisma/schema.prisma` content matches `Database_Schema.prisma`."

- [ ] **Task 16: Run Initial Migration**
    - **(Context):** The current working directory **must** be `project-nexus/apps/web`.
    - **(LLM Prompt):** "Run command: `npx prisma migrate dev --name init`"
    - **(Verification):** "Migration files created in `prisma/migrations/` directory."

- [ ] **Task 17: Apply Schema to Database**
    - **(Context):** The current working directory **must** be `project-nexus/apps/web`.
    - **(LLM Prompt):** "Run command: `npx prisma db push`"
    - **(Verification):** "Command output shows successful schema application."

- [ ] **Task 18: Generate Prisma Client**
    - **(Context):** The current working directory **must** be `project-nexus/apps/web`.
    - **(LLM Prompt):** "Run command: `npx prisma generate`"
    - **(Verification):** "Command output shows client generation success."

- [ ] **Task 19: Verify Schema in Prisma Studio**
    - **(Context):** The current working directory **must** be `project-nexus/apps/web`.
    - **(LLM Prompt):** "Run command: `npx prisma studio` and open `http://localhost:5555` in browser. Verify all tables and relationships match the spec."
    - **(Verification):** "All tables appear in Prisma Studio with correct relationships."

- [ ] **Task 20: Test CRUD Operations**
    - **(LLM Prompt):** "In Prisma Studio, add test data to each table. Perform create, read, update, and delete operations on each table."
    - **(Verification):** "All CRUD operations complete successfully for each table."

## Group: Implement Core Authentication

- [ ] **Task 21: Enable Email/Password Authentication**
    - **(LLM Prompt):** "In the Supabase dashboard, navigate to Authentication > Providers and enable Email/Password authentication."
    - **(Verification):** "Email/Password provider shows as enabled in Supabase dashboard."

- [ ] **Task 22: Configure Redirect URLs**
    - **(LLM Prompt):** "In Supabase Authentication settings, add `http://localhost:3000` and your Vercel deployment URL to 'Redirect URLs'."
    - **(Verification):** "Redirect URLs appear in Supabase configuration."

- [ ] **Task 23: Update Environment Variables**
    - **(LLM Prompt):** "Open `.env.local` and add/update SUPABASE_URL and SUPABASE_KEY with values from your Supabase project."
    - **(Verification):** "`.env.local` contains correct Supabase credentials."

- [ ] **Task 24: Create Auth Service File**
    - **(LLM Prompt):** "Create `src/services/auth.ts` and import Supabase client."
    - **(Verification):** "File `src/services/auth.ts` exists with Supabase import."

- [ ] **Task 25: Implement Signup Method**
    - **(LLM Prompt):** "In `auth.ts`, create `signUp` function that calls `supabase.auth.signUp()` with email and password parameters."
    - **(Verification):** "`signUp` function exists with correct parameters."

- [ ] **Task 26: Implement Login Method**
    - **(LLM Prompt):** "In `auth.ts`, create `signIn` function that calls `supabase.auth.signInWithPassword()` with email and password."
    - **(Verification):** "`signIn` function exists with correct parameters."

- [ ] **Task 27: Implement Logout Method**
    - **(LLM Prompt):** "In `auth.ts`, create `signOut` function that calls `supabase.auth.signOut()`."
    - **(Verification):** "`signOut` function exists."

- [ ] **Task 28: Create Protected Route Component**
    - **(LLM Prompt):** "Create `src/components/ProtectedRoute.tsx` that redirects unauthenticated users to login page."
    - **(Verification):** "File `ProtectedRoute.tsx` exists."

- [ ] **Task 29: Create Login Page**
    - **(LLM Prompt):** "Create `src/pages/login.tsx` with form that calls `signIn` method on submit."
    - **(Verification):** "Login page exists with email/password form."

- [ ] **Task 30: Create Signup Page**
    - **(LLM Prompt):** "Create `src/pages/signup.tsx` with form that calls `signUp` method on submit."
    - **(Verification):** "Signup page exists with registration form."

- [ ] **Task 31: Create Auth Context**
    - **(LLM Prompt):** "Create `src/context/AuthContext.tsx` with context provider for user session."
    - **(Verification):** "AuthContext file exists."

- [ ] **Task 32: Implement Auth State Listener**
    - **(LLM Prompt):** "In AuthContext, add useEffect hook that listens to `supabase.auth.onAuthStateChange` events."
    - **(Verification):** "Auth state changes update context."

- [ ] **Task 33: Wrap App with AuthProvider**
    - **(LLM Prompt):** "In `_app.tsx`, wrap Component with `<AuthProvider>`."
    - **(Verification):** "AuthProvider wraps the main app component."

- [ ] **Task 34: Test Signup Flow**
    - **(LLM Prompt):** "Navigate to signup page, create account, verify confirmation email."
    - **(Verification):** "New user appears in Supabase Auth users table."

- [ ] **Task 35: Test Login Flow**
    - **(LLM Prompt):** "Log out, then log in with new credentials."
    - **(Verification):** "User can log in and access protected routes."

- [ ] **Task 36: Test Protected Routes**
    - **(LLM Prompt):** "Access protected route while logged out - should redirect to login."
    - **(Verification):** "Unauthenticated users can't access protected routes."

- [ ] **Task 37: Test Session Persistence**
    - **(LLM Prompt):** "Log in, refresh page, verify session persists."
    - **(Verification):** "User remains logged in after page refresh."