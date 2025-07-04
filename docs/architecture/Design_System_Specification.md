# Design System Specification for Project Nexus  
**Version:** 1.0  
**Date:** 2025-06-10  
**Related Master Spec Section:** TBD (Requires Clarification from Stakeholders)  

---

## 1. Design Tokens  
_This section defines the foundational visual elements of the application._

### 1.1 Color Palette  
| Token Name      | Hex Value  | Usage Example          |
|-----------------|------------|------------------------|
| primary         | #007bff    | Primary buttons, links |
| secondary       | #6c757d    | Secondary actions      |
| accent          | #ff6b6b    | Highlights, alerts     |
| background      | #f8f9fa    | Page background        |
| text-primary    | #212529    | Body text              |
| text-secondary  | #495057    | Subtle text            |

### 1.2 Typography  
| Token Name | Font Size (px) | Line Height | Font Family       |
|------------|----------------|-------------|-------------------|
| sm         | 14             | 1.5         | 'Inter', sans-serif |
| md         | 16             | 1.6         | 'Inter', sans-serif |
| lg         | 20             | 1.6         | 'Inter', sans-serif |

### 1.3 Spacing  
| Token Name | Size (px) | Usage Example       |
|------------|-----------|---------------------|
| xs         | 4         | Icon padding        |
| sm         | 8         | Button padding      |
| md         | 16        | Section spacing     |
| lg         | 24        | Component spacing   |

---

## 2. Core Components  

### 2.1 Button Component  
```jsx
<Button 
  variant="primary" // 'primary' | 'secondary' | 'destructive'
  size="md"        // 'sm' | 'md' | 'lg'
  disabled={false}
>
  Button Text
</Button>
```

#### States  
| State    | Background Color | Text Color | Border           |
|----------|------------------|------------|------------------|
| Default  | primary          | white      | 1px solid primary|
| Hover    | darken(primary)  | white      | 1px solid primary|
| Disabled | #e9ecef         | #adb5bd    | 1px solid #dee2e6|

### 2.2 Card Component  
```jsx
<Card 
  elevation="md" // 'sm' | 'md' | 'lg'
  padding="md"   // 'sm' | 'md' | 'lg'
>
  Card Content
</Card>
```

---

## 3. Layout  
_This section requires clarification from stakeholders regarding specific layout requirements._

### 3.1 Main Application Structure  
- **Sidebar Width:** TBD  
- **Header Height:** TBD  
- **Max Content Width:** TBD  

---

_This document completes Task 1.1 from todo.md. Subsequent sections will be updated as more information becomes available from the Master Product & Business Specification._
## 4. Tailwind CSS Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#ff6b6b',
        background: '#f8f9fa',
        'text-primary': '#212529',
        'text-secondary': '#495057',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```
## 5. Complex Component Specs: Interactive Roadmap

### Node States (Visuals)
- **Locked:** Grayed out (#e9ecef), small size (24px), no border
- **Unlocked:** Primary color (#007bff), normal size (32px), 1px solid border
- **Active:** Glowing border (0 0 8px rgba(0,123,255,0.5)), larger size (40px)
- **Completed:** Muted primary color (rgba(0,123,255,0.5)), checkmark icon, normal size

### Edge States (Lines)
- **Default:** Light gray (#dee2e6), 1px solid
- **Path-to-Active:** Primary color (#007bff), 2px solid with animation (pulse effect)

### Interaction Behavior
- **Hover:** Show tooltip with node title and status
- **Click:** Navigate to corresponding node page
- **Zoom/Pan:** Smooth transitions with 300ms easing