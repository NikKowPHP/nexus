# Environment Variable Manifest for Project Nexus  
**Version:** 1.0  
**Date:** 2025-06-10  
**Related Master Spec Section:** TBD (Requires Clarification from Stakeholders)  

---

## Environment Variables Table

| Variable Name       | Purpose                          | Scope          | Example Value              |
|---------------------|----------------------------------|----------------|----------------------------|
| DATABASE_URL        | Prisma database connection URL   | Both           | postgres://user:pass@host  |
| SUPABASE_URL        | Supabase project URL             | Both           | https://xyz.supabase.co    |
| SUPABASE_KEY        | Supabase anonymous key           | Both           | eyJhbGciOiJIUzI...         |
| STRIPE_SECRET_KEY   | Stripe API secret key            | Prod           | sk_test_51...              |
| STRIPE_WEBHOOK_SECRET| Stripe webhook signing secret    | Prod           | whsec_...                  |
| OPENAI_API_KEY      | OpenAI API key                   | Both           | sk-...                     |
| NEXT_PUBLIC_API_URL | Public API base URL              | Both           | https://api.example.com    |
| NEXTAUTH_SECRET     | NextAuth.js encryption secret    | Both           | generate-with-openssl      |
| NEXTAUTH_URL        | NextAuth.js base URL             | Both           | http://localhost:3000      |

---

## Usage Notes

1. **Development Setup:** Create a `.env.local` file in the project root using these variables
2. **Production Setup:** Set these variables in your hosting provider's environment settings
3. **Security:** Never commit actual secret values to version control

_This manifest should be updated as new environment variables are added to the project._