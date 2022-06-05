# react-ellipsis-node

Easy React component that use native css `-webkit-line-clamp` to show ellipsis effect.

## Feature

- Easy to use
- Support both plain text and HTML/Components
- Native css properties ([browser support](https://caniuse.com/mdn-css_properties_-webkit-line-clamp))
- css-in-js

## Installation

```bash
npm install react-ellipsis-node
```

## Example

```tsx
import { Ellipsis } from 'react-ellipsis-node'

function App() {
  return (
    <Ellipsis lines={2}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut,enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Ellipsis>
  )
}
```
