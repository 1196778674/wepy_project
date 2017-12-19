'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'wepy'
    }, _this.data = {
      userInfo: {},
      num: 0,
      txt: '',
      list: [{ id: 0, name: 'liufei' }]
    }, _this.computed = {}, _this.methods = {
      setTxt: function setTxt(e) {
        this.txt = e.detail.value;
      },
      addList: function addList() {
        if (!this.txt) {
          return;
        }
        var item = { id: this.num, name: this.txt };
        this.list.push(item);
        this.txt = '';
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm51bSIsInR4dCIsImxpc3QiLCJpZCIsIm5hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZXRUeHQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJhZGRMaXN0IiwiaXRlbSIsInB1c2giLCJldmVudHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsV0FBSyxDQUZBO0FBR0xDLFdBQUssRUFIQTtBQUlMQyxZQUFNLENBQUMsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE1BQU0sUUFBZCxFQUFEO0FBSkQsSyxRQU9QQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDTkMsWUFETSxrQkFDRUMsQ0FERixFQUNLO0FBQ1AsYUFBS1AsR0FBTCxHQUFXTyxFQUFFQyxNQUFGLENBQVNDLEtBQXBCO0FBQ0gsT0FISztBQUlOQyxhQUpNLHFCQUlLO0FBQ1AsWUFBSSxDQUFDLEtBQUtWLEdBQVYsRUFBZTtBQUNYO0FBQ0g7QUFDRCxZQUFJVyxPQUFPLEVBQUNULElBQUksS0FBS0gsR0FBVixFQUFlSSxNQUFNLEtBQUtILEdBQTFCLEVBQVg7QUFDQSxhQUFLQyxJQUFMLENBQVVXLElBQVYsQ0FBZUQsSUFBZjtBQUNBLGFBQUtYLEdBQUwsR0FBVyxFQUFYO0FBQ0g7QUFYSyxLLFFBY1ZhLE0sR0FBUyxFOzs7Ozs2QkFJQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVbEIsUUFBVixFQUFvQjtBQUMzQyxZQUFJQSxRQUFKLEVBQWM7QUFDWmdCLGVBQUtoQixRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RnQixhQUFLRyxNQUFMO0FBQ0QsT0FMRDtBQU1EOzs7O0VBMUNnQyxlQUFLQyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd3ZXB5J1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge30sXG4gICAgICBudW06IDAsXG4gICAgICB0eHQ6ICcnLFxuICAgICAgbGlzdDogW3tpZDogMCwgbmFtZTogJ2xpdWZlaSd9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgc2V0VHh0IChlKSB7XG4gICAgICAgICAgICB0aGlzLnR4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGFkZExpc3QgKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnR4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpdGVtID0ge2lkOiB0aGlzLm51bSwgbmFtZTogdGhpcy50eHR9O1xuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnR4dCA9ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==