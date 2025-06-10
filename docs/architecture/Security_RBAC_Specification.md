# Security & RBAC Specification for Project Nexus
**Version:** 1.0  
**Date:** June 10, 2025  

_This document outlines the security architecture and Role-Based Access Control (RBAC) system, as derived from the Master Product & Business Specification (TBD: Section reference)._

## 1. API Route Protection

### 1.1 Next.js Middleware Implementation
- **Route Segmentation**:  
  - `/free/*` - Accessible to all authenticated users  
  - `/pro/*` - Requires `pro` subscription role  
  - `/admin/*` - Requires `admin` role  

- **Middleware Logic**:  
  ```typescript
  export function middleware(request: NextRequest) {
    const { user, subscription } = await getUserWithSubscription(request);
    if (request.nextUrl.pathname.startsWith('/pro') && subscription?.status !== 'ACTIVE') {
      return NextResponse.redirect('/upgrade');
    }
    // Additional role checks...
  }
  ```

### 1.2 Protected Route Examples
| Route Pattern       | Required Role | Fallback Action       |
|---------------------|---------------|-----------------------|
| /roadmaps/{id}/pro  | pro           | Redirect to /upgrade  |
| /admin/dashboard    | admin         | Return 403 Forbidden  |

## 2. Supabase Row-Level Security (RLS)

### 2.1 Core Security Policies
```sql
-- Users can only read their own profile
CREATE POLICY user_profile_policy ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can only update their own progress
CREATE POLICY progress_update_policy ON node_progress
  FOR UPDATE USING (auth.uid() = user_id);
```

### 2.2 Subscription Tier Access
```sql
-- Pro users can access pro content
CREATE POLICY pro_content_policy ON nodes
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM user_subscriptions 
           WHERE user_id = auth.uid() 
           AND tier = 'pro')
    OR is_free = true
  );
```

## 3. Input Validation Strategy

### 3.1 Validation Layers
1. **Client-Side**: Formik/Yup for basic field validation  
2. **Edge**: Zod schema validation in Next.js API routes  
3. **Database**: Prisma type safety + RLS policies  

### 3.2 Common Attack Mitigations
| Threat          | Validation Technique           | Example Implementation          |
|-----------------|---------------------------------|----------------------------------|
| XSS            | HTML sanitization              | DOMPurify library               |
| SQL Injection  | Parameterized queries          | Prisma ORM usage                |
| CSRF           | SameSite cookies               | NextAuth.js configuration       |

_Note: Detailed implementation specs TBD based on security audit requirements_