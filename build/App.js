"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./components/Input"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Input.default, {
    label: "Click me",
    onClick: () => {
      alert('clicked');
    }
  }));
};
var _default = exports.default = App;