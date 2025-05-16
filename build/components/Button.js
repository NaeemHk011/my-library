"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = _ref => {
  let {
    label = 'btn',
    onClick = () => {
      alert('clicked');
    }
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    style: {
      padding: '10px',
      background: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '4px'
    }
  }, label);
};
var _default = exports.default = Button;