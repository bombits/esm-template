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
