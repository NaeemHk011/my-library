"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _lib = require("./lib");
Object.keys(_lib).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lib[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lib[key];
    }
  });
});