# Test info

- Name: Button component renders correctly in Storybook
- Location: /home/kasjer/Downloads/projects/nexus/project-nexus/apps/web/tests/example.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('#storybook-preview-iframe').contentFrame().locator('button:has-text("Primary Button")')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#storybook-preview-iframe').contentFrame().locator('button:has-text("Primary Button")')

    at /home/kasjer/Downloads/projects/nexus/project-nexus/apps/web/tests/example.spec.ts:10:77
```

# Page snapshot

```yaml
- main:
  - button "Remount component":
    - img
  - button "Zoom in":
    - img
  - button "Zoom out":
    - img
  - button "Reset zoom":
    - img
  - button "Apply a grid to the preview":
    - img
  - button "Change the size of the preview":
    - img
  - button "Enable measure":
    - img
  - button "Apply outlines to the preview":
    - img
  - button "Go full screen":
    - img
  - link "Open canvas in new tab":
    - /url: iframe.html?id=components-button--primary
    - img
  - button "Copy canvas link":
    - img
  - progressbar "Content is loading..."
  - link "Skip to sidebar":
    - /url: "#components-button--primary"
  - iframe
- navigation:
  - link "Skip to canvas":
    - /url: "#storybook-preview-wrapper"
  - link "Storybook":
    - /url: ./
    - img "Storybook"
  - button "Shortcuts":
    - img
  - text: Search for components
  - combobox "Search for components":
    - img
    - searchbox "Search for components"
    - code: ⌃ K
    - button "Tag filters":
      - img
  - button:
    - img
  - img
  - link "Configure your project":
    - /url: /?path=/docs/configure-your-project--docs
    - img
    - text: Configure your project
  - button "Components" [expanded]:
    - img
    - text: Components
  - button "Collapse":
    - img
  - button "Badge":
    - img
    - img
    - text: Badge
  - button "Button" [expanded]:
    - img
    - img
    - text: Button
  - link "Primary":
    - /url: /?path=/story/components-button--primary
    - img
    - text: Primary
  - link "Skip to canvas":
    - /url: "#storybook-preview-wrapper"
  - link "Secondary":
    - /url: /?path=/story/components-button--secondary
    - img
    - text: Secondary
  - link "Default":
    - /url: /?path=/story/components-button--default
    - img
    - text: Default
  - link "With On Click":
    - /url: /?path=/story/components-button--with-on-click
    - img
    - text: With On Click
  - link "With Disabled":
    - /url: /?path=/story/components-button--with-disabled
    - img
    - text: With Disabled
  - link "With Loading":
    - /url: /?path=/story/components-button--with-loading
    - img
    - text: With Loading
  - link "With Color":
    - /url: /?path=/story/components-button--with-color
    - img
    - text: With Color
  - link "With Background Color":
    - /url: /?path=/story/components-button--with-background-color
    - img
    - text: With Background Color
  - link "With Size":
    - /url: /?path=/story/components-button--with-size
    - img
    - text: With Size
  - link "With Rounded":
    - /url: /?path=/story/components-button--with-rounded
    - img
    - text: With Rounded
  - link "With Border":
    - /url: /?path=/story/components-button--with-border
    - img
    - text: With Border
  - link "With Shadow":
    - /url: /?path=/story/components-button--with-shadow
    - img
    - text: With Shadow
  - link "With Padding":
    - /url: /?path=/story/components-button--with-padding
    - img
    - text: With Padding
  - link "With Margin":
    - /url: /?path=/story/components-button--with-margin
    - img
    - text: With Margin
  - link "With Width":
    - /url: /?path=/story/components-button--with-width
    - img
    - text: With Width
  - link "With Height":
    - /url: /?path=/story/components-button--with-height
    - img
    - text: With Height
  - link "With Min Width":
    - /url: /?path=/story/components-button--with-min-width
    - img
    - text: With Min Width
  - link "With Min Height":
    - /url: /?path=/story/components-button--with-min-height
    - img
    - text: With Min Height
  - link "With Max Width":
    - /url: /?path=/story/components-button--with-max-width
    - img
    - text: With Max Width
  - link "With Max Height":
    - /url: /?path=/story/components-button--with-max-height
    - img
    - text: With Max Height
  - link "With Overflow":
    - /url: /?path=/story/components-button--with-overflow
    - img
    - text: With Overflow
  - link "With Custom Style":
    - /url: /?path=/story/components-button--with-custom-style
    - img
    - text: With Custom Style
  - link "With Class Name":
    - /url: /?path=/story/components-button--with-class-name
    - img
    - text: With Class Name
  - link "With Icon":
    - /url: /?path=/story/components-button--with-icon
    - img
    - text: With Icon
  - link "With Icon Position":
    - /url: /?path=/story/components-button--with-icon-position
    - img
    - text: With Icon Position
  - link "With Icon Color":
    - /url: /?path=/story/components-button--with-icon-color
    - img
    - text: With Icon Color
  - link "With Icon Size":
    - /url: /?path=/story/components-button--with-icon-size
    - img
    - text: With Icon Size
  - link "With Icon Style":
    - /url: /?path=/story/components-button--with-icon-style
    - img
    - text: With Icon Style
  - link "With Icon Class Name":
    - /url: /?path=/story/components-button--with-icon-class-name
    - img
    - text: With Icon Class Name
  - link "With Tooltip":
    - /url: /?path=/story/components-button--with-tooltip
    - img
    - text: With Tooltip
  - link "With Responsive":
    - /url: /?path=/story/components-button--with-responsive
    - img
    - text: With Responsive
  - button "Card":
    - img
    - img
    - text: Card
  - button "NavBar":
    - img
    - img
    - text: NavBar
  - button "ProgressIndicator":
    - img
    - img
    - text: ProgressIndicator
  - button "TabBar":
    - img
    - img
    - text: TabBar
  - button "TextInput":
    - img
    - img
    - text: TextInput
  - button "Example" [expanded]:
    - img
    - text: Example
  - button "Collapse":
    - img
  - button "Button":
    - img
    - img
    - text: Button
  - button "Header":
    - img
    - img
    - text: Header
  - button "Page":
    - img
    - img
    - text: Page
  - text: Visual tests Login required Run local tests Not run
  - button "Show settings":
    - img
  - button "Enable watch mode":
    - img
  - button "Start test run":
    - img
  - text: Component tests Coverage (disabled)
  - button "Run tests":
    - img
    - text: Run tests
  - button "Expand testing module":
    - img
- tablist:
  - tab "Controls"
  - tab "Actions"
  - tab "Code"
  - tab "Visual tests"
  - tab "Component tests"
- button "Change addon orientation [alt D]":
  - img
- button "Hide addons [alt A]":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Button component renders correctly in Storybook', async ({ page }) => {
   4 |   await page.goto('http://localhost:6006/?path=/story/components-button--primary');
   5 |   
   6 |   // Wait for and switch to the Storybook iframe
   7 |   const storybookFrame = page.frameLocator('#storybook-preview-iframe');
   8 |   
   9 |   // Look for the exact button text from the story
> 10 |   await expect(storybookFrame.locator('button:has-text("Primary Button")')).toBeVisible();
     |                                                                             ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  11 | });
```