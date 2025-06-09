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
**Request:**  
```json
{
  "email": "user@example.com",
  "password": "securepassword"
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

## 4. Roadmap Endpoints  
### 4.1 Get Roadmap Structure  
`GET /api/v1/roadmaps/:roadmapId`  
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

### 4.2 Submit Node Completion  
`POST /api/v1/nodes/:nodeId/complete`  
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

## 5. User Progress Tracking  
`GET /api/v1/users/:userId/progress`  
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

## 6. Error Handling  
**Standard Error Response (4xx/5xx):**  
```json
{
  "error": {
    "code": "invalid_credentials",
    "message": "Email or password is incorrect"
  }
}
```

## 7. Rate Limiting  
- 100 requests/minute per IP address
- `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers