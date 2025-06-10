# API Specification v1 for Project Nexus  
**Version:** 1.0  
**Date:** June 9, 2025  

## 1. Overview  
This document details the API specification for Project Nexus's client-agnostic backend, implemented via Next.js API Routes. All endpoints return pure JSON responses suitable for web, mobile, and future clients.

## 2. Core Principles  
- **Stateless Design:** No server-side session storage
- **Client Agnosticism:** Uniform responses for all client types
- **RESTful Conventions:** Resource-oriented endpoint design
- **JSON-Only:** All responses in application/json format

## 3. Authentication
`POST /api/v1/auth/login`
**Request Validation Rules:**
- `email`: Valid email format (RFC 5322), required
- `password`: Minimum 8 characters, at least 1 letter and 1 number, required

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "user@example.com"
  }
}
```

**Error Responses:**
```json
{
  "error": {
    "code": "invalid_email_format",
    "message": "Email must be a valid email address"
  }
}

{
  "error": {
    "code": "invalid_password_format",
    "message": "Password must be at least 8 characters with 1 letter and 1 number"
  }
}

{
  "error": {
    "code": "invalid_credentials",
    "message": "Email or password is incorrect"
  }
}
```

## 4. Roadmap Endpoints
### 4.1 Get Roadmap Structure
`GET /api/v1/roadmaps/:roadmapId`
**Request Validation Rules:**
- `roadmapId`: Valid UUID format, required

**Response (200):**
```json
{
  "id": "roadmap_123",
  "title": "Public Speaking Mastery",
  "nodes": [
    {
      "id": "node_1",
      "title": "Foundations of Speaking",
      "type": "theory",
      "estimated_time": 30
    },
    {
      "id": "node_2",
      "title": "Voice Modulation Practice",
      "type": "practice",
      "estimated_time": 45
    }
  ]
}
```

**Error Responses:**
```json
{
  "error": {
    "code": "invalid_uuid_format",
    "message": "roadmapId must be a valid UUID"
  }
}

{
  "error": {
    "code": "roadmap_not_found",
    "message": "Requested roadmap does not exist"
  }
}
```

### 4.2 Submit Node Completion
`POST /api/v1/nodes/:nodeId/complete`
**Request Validation Rules:**
- `nodeId`: Valid UUID format, required
- `evidence`: Non-empty base64 string, required

**Request:**
```json
{
  "evidence": "base64_audio_or_text"
}
```

**Response (202):**
```json
{
  "feedback": "Great pacing! Try varying pitch more in section 2",
  "next_node": "node_3"
}
```

**Error Responses:**
```json
{
  "error": {
    "code": "invalid_node_id",
    "message": "nodeId must be a valid UUID"
  }
}

{
  "error": {
    "code": "empty_evidence",
    "message": "Evidence payload cannot be empty"
  }
}

{
  "error": {
    "code": "submission_failed",
    "message": "Could not process your submission"
  }
}
```

## 5. User Progress Tracking
`GET /api/v1/users/:userId/progress`
**Request Validation Rules:**
- `userId`: Valid UUID format, required

**Response (200):**
```json
{
  "completed_nodes": 15,
  "current_streak": 7,
  "skill_radar": {
    "confidence": 80,
    "clarity": 75,
    "body_language": 65
  }
}
```

**Error Responses:**
```json
{
  "error": {
    "code": "invalid_user_id",
    "message": "userId must be a valid UUID"
  }
}

{
  "error": {
    "code": "user_not_found",
    "message": "User does not exist"
  }
}
```

## 6. Error Handling
**Standard Error Responses:**
```json
// 400 Bad Request
{
  "error": {
    "code": "bad_request",
    "message": "Invalid request parameters"
  }
}

// 401 Unauthorized
{
  "error": {
    "code": "unauthorized",
    "message": "Authentication required"
  }
}

// 403 Forbidden
{
  "error": {
    "code": "forbidden",
    "message": "Insufficient permissions"
  }
}

// 404 Not Found
{
  "error": {
    "code": "not_found",
    "message": "Resource not found"
  }
}

// 429 Too Many Requests
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Too many requests, please try again later"
  }
}

// 500 Internal Server Error
{
  "error": {
    "code": "server_error",
    "message": "Internal server error"
  }
}
```

## 7. Rate Limiting
- 100 requests/minute per IP address
- `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers