Understood. The goal is to transform all existing granular task lists into an "ultra-granular" format that is more suitable for a smaller, more literal LLM. This new format is prescriptive and includes the file paths, the specific LLM action, and a clear verification step for each task.

This is an excellent strategy for delegating implementation to a less powerful but still capable AI agent.

Here is the `tasker_todo.md` for the Architect model. Its job is to take all existing task lists and re-format them into this new, highly structured, and LLM-friendly format.

---

### **`documentation/tasker_todo.md`**

```markdown
# Task Re-formatter Plan for Nexus Architect AI

**Objective:** To convert all existing granular task lists in `project_management/tasks/` into an ultra-granular, prescriptive format suitable for a 4B LLM agent. The new format must include explicit file paths, LLM actions, and verification steps for each logical task.

**Legend:**
*   `[ ]` - To-Do
*   `(File)` / `(Files)` - The primary file(s) to modify or create.
*   `(LLM Action)` - The specific, literal instruction for the implementation agent.
*   `(Verification)` - How to confirm the step was completed successfully.

---

## Phase 1: Re-format Foundational Setup Tasks

- [x] **1.1. Re-format Project Initialization**
    - **(Source File):** `project_management/tasks/1.1_project_initialization.md`
    - **(Target File):** `project_management/tasks/1.1_project_initialization.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Combine related shell commands into logical steps."
    - **(Example Output Format):**
        ```markdown
        # Granular Task List: 1.1 Initialize Project & Version Control
        ---
        - [ ] **Task 1: Initialize Git Repository**
            - **(LLM Action):** "In your terminal, execute the following commands in sequence: `mkdir project-nexus`, `cd project-nexus`, `git init`."
            - **(Verification):** "A new directory named `project-nexus` exists and contains a `.git` subdirectory."

        - [ ] **Task 2: Create Core Directory Structure**
            - **(LLM Action):** "In your terminal, inside the `project-nexus` directory, execute the following commands in sequence: `mkdir -p apps`, `mkdir -p packages/ui`, `mkdir -p packages/config`."
            - **(Verification):** "The directories `apps`, `packages/ui`, and `packages/config` exist at the root of the project."
        
        - [ ] **Task 3: Create Initial Project Files**
            - **(LLM Action):** "In your terminal, inside the `project-nexus` directory, execute: `touch README.md` and `touch .gitignore`."
            - **(Verification):** "The files `README.md` and `.gitignore` exist at the root of the project."
        
        - [ ] **Task 4: Populate Initial Project Files**
            - **(LLM Action):** "Open `README.md` and set its content to `# Project Nexus`. Then, open `.gitignore` and add the following lines: `node_modules`, `.next`, `.vercel`, `*.env.local`."
            - **(Verification):** "The `README.md` and `.gitignore` files contain the specified content."

        - [ ] **Task 5: Create First Git Commit**
            - **(LLM Action):** "In your terminal, execute `git add .` followed by `git commit -m 'feat: initial project structure and monorepo setup'`."
            - **(Verification):** "Running `git log -1` shows the new commit with the specified message."
        ```

- [x] **1.2. Re-format Cloud Infrastructure Setup**
    - **(Source File):** `project_management/tasks/1.2_cloud_infrastructure_setup.md`
    - **(Target File):** `project_management/tasks/1.2_cloud_infrastructure_setup.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Group steps logically (e.g., 'Create Supabase Project', 'Configure Vercel Environment'). For actions requiring web interaction, describe the clicks and inputs precisely."

- [x] **1.3. Re-format Local Development Environment Setup**
    - **(Source File):** `project_management/tasks/1.3_local_development_environment.md`
    - **(Target File):** `project_management/tasks/1.3_local_development_environment.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Ensure file creation and content pasting are separate, explicit steps."

- [x] **1.4. Re-format Core Data Structures**
    - **(Source File):** `project_management/tasks/1.4_core_data_structures.md`
    - **(Target File):** `project_management/tasks/1.4_core_data_structures.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Specify the exact Prisma commands to be run."

- [x] **1.5. Re-format Core Authentication**
    - **(Source File):** `project_management/tasks/1.5_core_authentication.md`
    - **(Target File):** `project_management/tasks/1.5_core_authentication.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Break down 'Implement signup method' into creating the file, writing the function signature, implementing the Supabase call, and handling the response."

## Phase 2: Re-format Core Feature Tasks

- [x] **2.1. Re-format UI Component Library**
    - **(Source File):** `project_management/tasks/2.1_ui_component_library.md`
    - **(Target File):** `project_management/tasks/2.1_ui_component_library.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. For each component (`Button`, `Card`, etc.), create separate tasks for file creation, base component code, styling with Tailwind, and state implementation (e.g., hover, disabled)."

- [x] **2.2. Re-format Roadmap & Node Viewing**
    - **(Source File):** `project_management/tasks/2.2_roadmap_node_viewing.md`
    - **(Target File):** `project_management/tasks/2.2_roadmap_node_viewing.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Separate the tasks for data fetching logic from the tasks for UI rendering."

- [x] **2.3. Re-format AI Assessment Loop**
    - **(Source File):** `project_management/tasks/2.3_ai_assessment_loop.md`
    - **(Target File):** `project_management/tasks/2.3_ai_assessment_loop.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Create distinct tasks for the frontend file upload UI, the Next.js API route creation, the LLM API call logic within the route, and the frontend logic to display the returned feedback."

- [x] **2.4. Re-format Gamification & Progress Tracking**
    - **(Source File):** `project_management/tasks/2.4_gamification_progress_tracking.md`
    - **(Target File):** `project_management/tasks/2.4_gamification_progress_tracking.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Separate database logic (e.g., SQL function for updating streaks) from the API endpoint that calls it, and the frontend component that displays it."

## Phase 3: Re-format Monetization & Admin Tasks

- [x] **3.1. Re-format Stripe Subscription**
    - **(Source File):** `project_management/tasks/3.1_stripe_subscription.md`
    - **(Target File):** `project_management/tasks/3.1_stripe_subscription.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Follow the successful pattern of separating tasks for UI, API routes, and webhook logic."

- [x] **3.2. Re-format Admin Dashboard**
    - **(Source File):** `project_management/tasks/3.2_admin_dashboard.md`
    - **(Target File):** `project_management/tasks/3.2_admin_dashboard.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Create separate tasks for the protected admin layout, the user list table UI, the data fetching API for users, and the user editing modal."

## Phase 4: Re-format Production Readiness Tasks

- [x] **4.1. Re-format CI/CD Pipeline**
    - **(Source File):** `project_management/tasks/4.1_ci_cd_pipeline.md`
    - **(Target File):** `project_management/tasks/4.1_ci_cd_pipeline.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Detail the exact YAML configuration for GitHub Actions or configuration steps in the Vercel dashboard."

- [x] **4.2. Re-format Monitoring & Alerting**
    - **(Source File):** `project_management/tasks/4.2_monitoring_alerting.md`
    - **(Target File):** `project_management/tasks/4.2_monitoring_alerting.md` (Overwrite)
    - **(LLM Action):** "Analyze the source file and convert its contents into the ultra-granular format. Specify the code needed to initialize Sentry's SDK and the steps to set up a basic alert in the Sentry dashboard."
```