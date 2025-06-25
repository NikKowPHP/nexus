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
  }
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END