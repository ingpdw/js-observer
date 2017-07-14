"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * js-observer - lib/observer.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this._observer = [];
  }

  _createClass(Observer, [{
    key: "emit",
    value: function emit(data) {
      this._observer.forEach(function (ob) {
        ob.func.call(ob.scope, data);
      });
    }
  }, {
    key: "add",
    value: function add(func, scope) {
      var _observer = this._observer;
      _observer.push({ func: func, scope: scope });
    }
  }, {
    key: "remove",
    value: function remove(func, scope) {
      var _observer = this._observer;

      for (var i = _observer.length - 1; i >= 0; --i) {
        if (_observer[i].func === func && _observer[i].scope === scope) {
          _observer.splice(i, 1);
          break;
        }
      }
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this._observer = [];
    }
  }]);

  return Observer;
}();