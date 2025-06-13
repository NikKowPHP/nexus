# Strategic Fix Plan: Resolving Phantom Tab State

## Problem
Phantom `NEEDS_ARCHITECTURAL_REVIEW.md` in VSCode tabs blocking autonomous flow.

## Root Cause
1. File deleted but tab remains open
2. Orchestrator uses tab presence for decisions
3. No validation of file existence beyond tab state

## Fix Plan
- [x] **Task 1: Delete phantom file from disk**
    - **LLM Prompt:** "Delete NEEDS_ARCHITECTURAL_REVIEW.md from root directory"
    - **Verification:** `ls` shows file missing

- [ ] **Task 2: Close phantom tab in VSCode**
    - **LLM Prompt:** "Execute VSCode command: 'workbench.action.closeActiveEditor' for NEEDS_ARCHITECTURAL_REVIEW.md"
    - **Verification:** File disappears from open tabs

- [ ] **Task 3: Update Orchestrator decision logic**
    - **LLM Prompt:** "Modify Orchestrator rules to verify file existence, not just tab presence"
    - **File:** `.roo/rules-orchestrator-senior/rules.md`
    - **Change:** Add filesystem check before mode switching

- [ ] **Task 4: Clean up and reset**
    - **LLM Prompt:** "Delete NEEDS_ARCHITECTURAL_REVIEW.md"
    - **Verification:** File not in tabs or filesystem