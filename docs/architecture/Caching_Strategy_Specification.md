# Caching Strategy Specification for Project Nexus  
**Version:** 1.0  
**Date:** 2025-06-10  
**Related Master Spec Section:** TBD (Requires Clarification from Stakeholders)  

---

## 1. Caching Layers  
_This section defines the caching architecture layers used in the application._

### 1.1 Next.js Data Cache  
- **Purpose:** Client-side caching of static and dynamic pages  
- **Scope:** Browser-level caching  
- **Default TTL:** 60 seconds (configurable per page)  

### 1.2 Redis Cache  
- **Purpose:** Server-side caching of database queries and API responses  
- **Scope:** Application-level caching  
- **Default TTL:** 3600 seconds (1 hour)  

---

## 2. Data Caching Rules  

| Data Type          | Cache Key Pattern      | TTL (Seconds) | Invalidation Trigger               |
|--------------------|------------------------|---------------|------------------------------------|
| Roadmap Content    | `roadmap:{roadmapId}`  | 86400 (24h)   | On admin update to roadmap content |
| User Profile       | `user:{userId}`        | 3600 (1h)     | On user profile update             |
| API Configuration  | `config:{configId}`    | 604800 (7d)   | On admin configuration change      |
| Content Metadata   | `meta:{contentId}`     | 1800 (30m)    | On content metadata update         |

_Note: Actual data types and TTL values should be confirmed with the Master Product & Business Specification._

---

## 3. API Route Caching  

### 3.1 Cacheable Routes  
- `/api/v1/content/{id}` (GET) - Redis cache, TTL 300s  
- `/api/v1/config` (GET) - Redis cache, TTL 3600s  
- `/api/v1/public/{slug}` (GET) - Redis cache, TTL 60s  

### 3.2 Non-Cacheable Routes  
- All POST/PUT/DELETE routes  
- Authenticated user-specific routes  

---

_This document completes Task 2 from todo.md. Specific caching rules and TTL values should be reviewed with stakeholders during implementation._