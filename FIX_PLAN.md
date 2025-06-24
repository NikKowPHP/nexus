# Supabase Module Resolution Fix

## Steps to Resolve:
1. Update tsconfig.json to add baseUrl
2. Modify AuthContext import to use @ alias
3. Remove unnecessary type declaration files
4. Verify TypeScript error resolution

## Detailed Steps:

### 1. Update tsconfig.json
```diff
// ROO-AUDIT-TAG :: FIX :: Update tsconfig
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
+   "baseUrl": ".",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "typeRoots": ["./node_modules/@types", "./types"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 2. Update AuthContext Import
```diff
// ROO-AUDIT-TAG :: FIX :: Update AuthContext import
- import supabase from '../lib/supabase';
+ import { supabase } from '@/lib/supabase';
```

### 3. Remove Unnecessary Files
```sh
rm src/lib/supabase.d.ts
rm src/lib/index.ts
```

### 4. Verification
- Ensure TypeScript error is resolved
- Confirm application builds successfully