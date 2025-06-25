// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Implement theme provider
export type Theme = {
  colors: {
    primary: string
    secondary: string
    success: string
    warning: string
    danger: string
    background: string
    text: string
  },
  typography: {
    h1: { fontSize: string; fontWeight: number; lineHeight: number }
    h2: { fontSize: string; fontWeight: number; lineHeight: number }
    h3: { fontSize: string; fontWeight: number; lineHeight: number }
    h4: { fontSize: string; fontWeight: number; lineHeight: number }
    h5: { fontSize: string; fontWeight: number; lineHeight: number }
    h6: { fontSize: string; fontWeight: number; lineHeight: number }
    bodyLarge: { fontSize: string; fontWeight: number; lineHeight: number }
    bodyMedium: { fontSize: string; fontWeight: number; lineHeight: number }
    bodySmall: { fontSize: string; fontWeight: number; lineHeight: number }
  },
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#4b5563',
    success: '#059669',
    warning: '#d97706',
    danger: '#dc2626',
    background: '#ffffff',
    text: '#1f2937'
  },
  typography: {
    h1: { fontSize: '3.052rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '2.441rem', fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: '1.953rem', fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: '1.563rem', fontWeight: 600, lineHeight: 1.4 },
    h5: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.5 },
    bodyLarge: { fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.6 },
    bodyMedium: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
    bodySmall: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  }
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END