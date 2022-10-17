# ES Module Template
## Write React/TS and get single ESM file

A simple template to write React/Typescript using Vite tooling to transpile/pack into a plain ES module that uses CDN as a first feature

This package was created via ``` npx vite create```, then appending ``` types/externalDeps.d.ts``` and  ``` deps.ts``` and targeting configs to ESNext

## Example

### Input

> ``` myESModule.tsx```

```tsx
import { React }  from './deps'
import { hello } from './hello'

export function MyESModule(){
  return (
    <div>
      { hello( 'esm' ) }
    </div>
  )
}
```
> ``` hello.ts```
```ts
export function hello( name?:string ){
  let message = `hello ${ name }` 
  return message
}
```

### Output
After ``` yarn build``` ie ``` vite build```
> ``` /lib/index.js```
```js
import * as CDNReact from "https://cdn.skypack.dev/react";
const React = CDNReact;
function hello(name) {
  return `hello ${name}`;
}
function MyESModule() {
  return /* @__PURE__ */ React.createElement("div", null, hello("esm"));
}
export {
  MyESModule
};

```
### CDN
To understand the CDN part, we have two typescript helpers:

> ``` types/externalDeps.d.ts```
```ts
declare module 'https://*'
declare module 'https://cdn.skypack.dev/react'
```

and

> ``` deps.ts```
```ts
import * as React_ from 'react'
import * as CDNReact from 'https://cdn.skypack.dev/react'

export const React = CDNReact as unknown as typeof React_
```


