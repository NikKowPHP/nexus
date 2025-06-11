# INTERVENTION FIX PLAN (ATOMIC)

**Problem:** The Developer AI failed on a Prisma migration task. The error "Environment variable not found: DATABASE_URL" indicates the command was run from the wrong directory. The task list was ambiguous about the required working directory.

**Solution:** Add an explicit `(Context)` to the failing task and retry.

- [ ] **Task 1: Correct the Ambiguous Task**
    - **(File):** `project_management/tasks/1.4_core_data_structures.md`
    - **(LLM Action):** "In the target file, locate 'Task 3: Run Initial Migration'. Before the `(LLM Action)` line, insert a new line with the following content: `    - **(Context):** The current working directory **must** be `project-nexus/apps/web`."
    - **(Verification):** "The file `project_management/tasks/1.4_core_data_structures.md` now contains the `(Context)` line for Task 3."

- [ ] **Task 2: Prepare for Retry**
    - **(LLM Action):** "Delete the `NEEDS_ASSISTANCE.md` file from the root directory."
    - **(Verification):** "The file `NEEDS_ASSISTANCE.md` no longer exists."