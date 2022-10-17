(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("https://cdn.skypack.dev/react")) : typeof define === "function" && define.amd ? define(["exports", "https://cdn.skypack.dev/react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory((global.index = global.index || {}, global.index.jsx = {}), global.CDNReact));
})(this, function(exports2, CDNReact) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const CDNReact__namespace = /* @__PURE__ */ _interopNamespace(CDNReact);
  const React = CDNReact__namespace;
  function hello(name) {
    return `hello ${name}`;
  }
  function MyESModule() {
    return /* @__PURE__ */ React.createElement("div", null, hello("esm"));
  }
  exports2.MyESModule = MyESModule;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
