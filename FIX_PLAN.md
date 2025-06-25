# Fix Plan: Resolve Supabase Import Issue

## Problem
Unable to import supabase client in `project-nexus/apps/web/pages/api/assessments/submit.ts` due to path resolution errors.

## Diagnosis
- Incorrect path resolution despite valid configurations in `tsconfig.json`.
- Path alias `@/lib/supabase` should map to `src/lib/supabase`.

## Solution Steps
1. **Update Import Statement**:
   ```typescript
   // In submit.ts
   import { supabase } from '@/lib/supabase';
   ```
2. **Verify Path Alias**:
   - Ensure `tsconfig.json` has:
     ```json
     "baseUrl": ".",
     "paths": {
       "@/*": ["./src/*"]
     }
     ```
3. **Restart TypeScript Server**:
   - If the error persists, restart the IDE or run `npm run dev -- --force` to rebuild.

4. **Test Implementation**:
   - Confirm that the import works and the supabase client is accessible.

## Verification
- Check that the import error no longer appears.
- Ensure the application compiles and runs without issues.