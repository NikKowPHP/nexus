# Content Management & Expert Tooling Architecture for Project Nexus
**Version:** 1.0  
**Date:** June 10, 2025  

_This document outlines the architecture for the Content Management and Expert Tooling, as derived from the Master Product & Business Specification (TBD: Section reference)._

## 1. UI/UX: Admin Dashboard for SMEs

### 1.1 Dashboard Overview  
- **Content Inventory View**: List of all roadmaps/nodes with filters (status, type, author)  
- **AI Generation Panel**: Interface for initiating content generation with prompt inputs  
- **Approval Workflow Visualization**: Pipeline view of content in draft/review/published states  

### 1.2 Content Editing Interface  
- **WYSIWYG Editor**: Rich text editing with media embedding capabilities  
- **Version Comparison**: Side-by-side diff view of content versions  
- **Preview Modes**: Mobile/desktop previews and learner perspective toggle  

## 2. Workflow: Content Lifecycle Management

### 2.1 Creation Phase  
1. SME initiates new roadmap/node creation  
2. AI generates initial content structure (TBD: Detailed prompt format)  
3. SME reviews and edits generated content  

### 2.2 Review Phase  
- **Internal Review**: SME shares with internal stakeholders (TBD: Review system spec)  
- **AI Quality Check**: Automated checks for completeness/accuracy  
- **Approval Process**: Admin sign-off before publishing  

### 2.3 Publication Phase  
- **Scheduled Publishing**: Set future publish dates/times  
- **Version Archiving**: Automatic snapshot of previous versions  
- **Deprecation Workflow**: Process for retiring outdated content  

## 3. RBAC: Roles and Permissions

| Role       | Content Creation | Content Editing | AI Generation | Publishing | User Management |
|------------|------------------|-----------------|---------------|------------|-----------------|
| Admin      | ✓               | ✓               | ✓             | ✓          | ✓               |
| SME        | ✓               | ✓               | ✓             | (TBD)      | ✗               |
| Moderator  | ✗               | ✓               | ✗             | ✓          | ✗               |

## 4. API Endpoints

### 4.1 Content Management  
- `POST /api/admin/content/drafts` - Initiate new content draft  
- `PUT /api/admin/content/{id}/versions` - Create new version  
- `GET /api/admin/content/status` - Get publication status  

### 4.2 AI Integration  
- `POST /api/admin/ai/generate` - Request content generation  
- `GET /api/admin/ai/history` - Retrieve generation history  

### 4.3 Publication  
- `POST /api/admin/publish/schedule` - Schedule publication  
- `POST /api/admin/publish/rollback` - Revert to previous version  

_All endpoints require JWT authentication with role-based access controls (TBD: Detailed auth spec)_
