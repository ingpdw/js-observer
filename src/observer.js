/*
 * js-observer - lib/observer.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = class Observer {

  constructor(){
    this._observer = [];
  }

  emit( data ) {
    this._observer.forEach( ( ob ) => {
  		ob.func.call( ob.scope, data );
  	});
  }

  add( func, scope ) {
    let _observer = this._observer;
    _observer.push({ func: func, scope: scope });
  }

  remove( func, scope ) {
    let _observer = this._observer;

    for (var i = _observer.length - 1; i >= 0; --i) {
  		if (_observer[i].func === func && _observer[i].scope === scope) {
  			_observer.splice( i, 1 );
  			break;
  		}
  	}
  }

  removeAll() {
    this._observer = [];
  }
}
