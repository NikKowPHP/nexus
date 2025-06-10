# Refinement Phase Todo List for Nexus AI Architect

**Objective:** To transform the draft SDLC documents into implementation-ready blueprints by adding depth, granularity, and addressing strategic gaps.

**Source of Truth:** Continue to use the `Master Product & Business Specification` and the existing v1.0 documents as your context.

## Phase 1: Quality Control & Polishing

- [x] **1.1. Sanitize AI Artifacts**
    - **Action:** Systematically scan all generated documents for any non-English text, placeholder artifacts (like "极狐"), or formatting errors.
    - **File(s) to Edit:** `documentation/todo.md` and any other affected files.
    - **Outcome:** All documents are professionally polished and free of generation errors.

## Phase 2: Adding Granularity & Detail

- [x] **2.1. Deepen the API Specification**
    - **Action:** Edit the `API_Specification_v1.md` to include critical implementation details. For each endpoint, add:
        - **Request Validation Rules:** (e.g., `email` must be a valid email format, `password` must be >8 characters).
        - **Detailed Error Codes:** Define specific error responses (e.g., `{"error": {"code": "user_not_found"}}`, `{"error": {"code": "invalid_payload"}}`).
        - **Pagination Contracts:** For list endpoints like `/roadmaps`, define the pagination mechanism (e.g., cursor-based or offset/limit).
    - **File(s) to Edit:** `docs/architecture/API_Specification_v1.md`

- [x] **2.2. Refine the Database Schema**
    - **Action:** Edit the `Database_Schema.prisma` file to add production-ready details.
        - **Indexes:** Add `@@index([userId])` to performance-critical models like `NodeProgress` and `Habit` for faster lookups.
        - **Foreign Key Actions:** Specify `onDelete` and `onUpdate` behavior for relations (e.g., if a `User` is deleted, what happens to their `NodeProgress`? It should be `Cascade`d).
        - **Define JSON Structures:** For the `content` field on the `Node` model, add a comment (`///`) detailing the expected JSON structure (e.g., `{ "type": "video", "url": "...", "transcript": "..." }`).
    - **File(s) to Edit:** `docs/architecture/Database_Schema.prisma`

- [x] **2.3. Granulate the MVP Task Breakdown**
    - **Action:** Edit the `MVP_Task_Breakdown.md` to break down high-level tasks into smaller, developer-sized tickets.
        - **Example:** Change "Implement Prisma ORM setup" to:
            - `[ ] [Data] Define User and Roadmap models in schema.prisma`
            - `[ ] [Data] Create initial database migration script with 'prisma migrate dev'`
            - `[ ] [Data] Write seed script to populate initial flagship roadmaps`
    - **File(s) to Edit:** `project_management/MVP_Task_Breakdown.md`

## Phase 3: Closing Strategic Gaps

- [x] **3.1. Create Content Management & Expert Tooling Architecture [NEW DOCUMENT]**
    - **Action:** Create a new document that details the architecture for the "Augmented Expert" tools mentioned in the Master Spec. This is a critical missing piece.
    - **File to Create:** `docs/architecture/Content_Management_Architecture.md`
    - **Content:**
        - **UI/UX:** A description of the admin dashboard for SMEs.
        - **Workflow:** How an SME initiates AI content generation, reviews, edits, and publishes a roadmap.
        - **RBAC:** Define roles (Admin, SME) and their permissions.
        - **API:** Specify the API endpoints for the admin panel (e.g., `/api/admin/roadmaps`, `/api/admin/ai/generate-draft`).

- [x] **3.2. Create Security & RBAC Specification [NEW DOCUMENT]**
    - **Action:** Create a new, dedicated document for security and Role-Based Access Control.
    - **File to Create:** `docs/architecture/Security_RBAC_Specification.md`
    - **Content:**
        - **API Route Protection:** Detail how middleware will be used in Next.js to protect routes based on user roles (e.g., a Free user cannot access a Pro-level node).
        - **Supabase Policies:** Define the Row-Level Security (RLS) policies that will be implemented in Supabase to ensure users can only access their own data.
        - **Input Validation:** Formalize the strategy for validating all user input on the server-side to prevent XSS, SQL injection, etc.

- [x] **3.3. Expand the AI Integration Architecture**
    - **Action:** Edit the existing AI architecture document to include crucial implementation details.
    - **File(s) to Edit:** `docs/architecture/AI_Integration_Architecture.md`
    - **Content to Add:**
        - **Prompt Engineering Strategy:** Provide examples of the specific prompts that will be sent to the LLM for different tasks (e.g., audio feedback, text summarization).
        - **Structured Feedback Schema:** Define the JSON structure of the feedback object returned by the AI. This is vital for the frontend to render it consistently.
        - **Abuse & Cost Mitigation:** Outline strategies to prevent prompt injection and to monitor/limit API calls to the LLM to control costs.