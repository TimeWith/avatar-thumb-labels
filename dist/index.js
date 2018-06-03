'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _avatarThumb = require('@time-with/avatar-thumb');

var _avatarThumb2 = _interopRequireDefault(_avatarThumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarThumbLabels = function (_Component) {
  _inherits(AvatarThumbLabels, _Component);

  function AvatarThumbLabels() {
    _classCallCheck(this, AvatarThumbLabels);

    return _possibleConstructorReturn(this, (AvatarThumbLabels.__proto__ || Object.getPrototypeOf(AvatarThumbLabels)).apply(this, arguments));
  }

  _createClass(AvatarThumbLabels, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          firstName = _props.firstName,
          lastName = _props.lastName,
          secondLabel = _props.secondLabel,
          style = _props.style;
      var _props2 = this.props,
          bgColor = _props2.bgColor,
          radius = _props2.radius,
          fontSize = _props2.fontSize,
          color = _props2.color;

      if (!bgColor) {
        bgColor = '#7DCE82';
      }
      if (!fontSize) {
        fontSize = '18px';
      }
      if (!radius) {
        radius = '45px';
      }
      if (!color) {
        color = '#7D7B7B';
      }

      var FirstLabel = _glamorous2.default.p({
        color: color + ' !important',
        display: 'block !important',
        marginTop: '2px !important',
        marginBottom: '0 !important',
        lineHeight: '21px !important',
        fontSize: '18px !important',
        fontWeight: 'bold !important',
        textAlign: 'left !important'
      });

      var SecondLabel = _glamorous2.default.p(_defineProperty({
        color: color + ' !important',
        display: 'block !important',
        fontSize: '14px !important',
        lineHeight: '18px !important',
        marginBottom: '0 !important'
      }, 'lineHeight', '21px !important'));

      return _react2.default.createElement(
        RootDIV,
        { style: style },
        _react2.default.createElement(_avatarThumb2.default, {
          src: src,
          firstName: firstName,
          lastName: lastName,
          bgColor: bgColor,
          radius: radius,
          fontSize: fontSize,
          color: color,
          style: avatarStyle
        }),
        _react2.default.createElement(
          TextDIV,
          null,
          _react2.default.createElement(
            FirstLabel,
            null,
            firstName + ' ' + lastName
          ),
          secondLabel ? _react2.default.createElement(
            SecondLabel,
            null,
            secondLabel
          ) : null
        )
      );
    }
  }]);

  return AvatarThumbLabels;
}(_react.Component);

exports.default = AvatarThumbLabels;


var RootDIV = _glamorous2.default.div({
  display: 'inline-block',
  verticalAlign: 'top'
});

var TextDIV = _glamorous2.default.div({
  display: 'inline-block',
  verticalAlign: 'top'
});

var avatarStyle = {
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '10px'
};
//# sourceMappingURL=index.js.map