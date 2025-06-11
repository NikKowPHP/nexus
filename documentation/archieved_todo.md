# Task Re-formatter Plan v2 (Context-Aware)

**Objective:** To systematically update all granular task lists in `project_management/tasks/` to include an explicit `(Context)` field for any command-line actions. This will eliminate ambiguity for the Developer AI regarding the execution directory.

**Legend:**
*   `[ ]` - To-Do
*   `(File)` - The primary file to modify.
*   `(LLM Action)` - The specific instruction.
*   `(Verification)` - How to confirm the step.

---

- [ ] **1. Re-format All `project_management/tasks/` Files**
    - **(Files):** All markdown files within the `project_management/tasks/` directory.
    - **(LLM Action):** "For each file in the `project_management/tasks/` directory, perform the following transformation:
      1.  Scan the file for any task that includes an `(LLM Action)` containing a shell command like `npm`, `npx`, `git`, or `docker`.
      2.  For each such task, insert a new line **directly before** the `(LLM Action)` line.
      3.  The content of this new line must be: `    - **(Context):** The current working directory **must** be \`project-nexus/apps/web\`.` (Unless the command is `docker-compose` or a root-level git command, in which case the context is the project root `project-nexus`).
      4.  Ensure the indentation matches the existing list format."
    - **(Verification):** "Open a sample of modified files (e.g., `1.4_core_data_structures.md`, `2.1_ui_component_library.md`). Verify that tasks with shell commands now have the explicit `(Context)` line specifying the correct working directory."
    - **(Example Transformation):**

      **BEFORE:**
      ```markdown
      - [ ] **Task 3: Run Initial Migration**
          - **(LLM Action):** "Run command: `npx prisma migrate dev --name init`"
          - **(Verification):** "Migration files created in `prisma/migrations/` directory."
      ```
      
      **AFTER:**
      ```markdown
      - [ ] **Task 3: Run Initial Migration**
          - **(Context):** The current working directory **must** be `project-nexus/apps/web`.
          - **(LLM Action):** "Run command: `npx prisma migrate dev --name init`"
          - **(Verification):** "Migration files created in `prisma/migrations/` directory."
      ```

- [ ] **2. Finalize Re-formatting**
    - **Action:** Once all files in `project_management/tasks/` have been updated, archive this `tasker_todo.md` and replace the primary `documentation/todo.md` with the "Ready for Execution" message.
    - **(Verification):** The `documentation/todo.md` file contains the final "Ready for Execution" message, and the task files in `project_management/tasks/` are now context-aware.