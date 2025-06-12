## Failing Plan Path
FIX_PLAN.md

## Task Description
Update Storybook ecosystem to version 9.0.8 and eslint-plugin-storybook to 9.0.8

## Action Attempted
Command: `npm install storybook@9.0.8 eslint-plugin-storybook@9.0.8 --force`

## Verification Error
package.json still shows:
- "@storybook/react": "^8.6.14"
- "eslint-plugin-storybook": "^9.0.7"

## Error Message
npm WARN EBADENGINE Unsupported engine {
  package: 'eslint-plugin-storybook@9.0.8',
  required: { node: '>=20.0.0' },
  current: { node: 'v18.19.1', npm: '9.2.0' }
}