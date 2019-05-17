'use strict';
class ProxyFactory {
  static create(obj, props, action) {
    return new Proxy(obj, {
      get(target, prop, receiver) {
        if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
          return function() {
            console.log(`Interception the property: ${prop}`);
            Reflect.apply(target[prop], target, arguments);
            return action(target);
          };
        }
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        if (props.includes(prop)) {
          target[prop] = value;
          action(target);
        }
        return Reflect.set(target, prop, value, receiver);
      }
    });
  }

  static _isFunction(func) {
    return typeof func === typeof Function;
  }
}