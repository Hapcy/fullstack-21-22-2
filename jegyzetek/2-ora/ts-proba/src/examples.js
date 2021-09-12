"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var a = 1;
a = 'asd';
a = function () { };
var n = 1;
// n = 'asd';
var arr = [1, 2];
var arrAny = [];
var arrNum = [1, 2];
var arrMixed = [1, 'ketto'];
var tuple = [1, 2];
tuple = [4, 5];
// const tupleNumberString: [number, string] = arrMixed;
var obj = {};
// obj.x = 5;
var obj2 = { x: 0 };
obj2.x = 5;
var Basket = /** @class */ (function () {
    function Basket() {
    }
    return Basket;
}());
var basket = { apples: 1 };
var basketT = basket;
var basketI = basket;
var basketKlass = basket;
console.log(basket instanceof Basket); // false
console.log(basketKlass instanceof Basket); // false
var Fruit;
(function (Fruit) {
    Fruit[Fruit["pear"] = 0] = "pear";
    Fruit["apple"] = "APPLE";
})(Fruit || (Fruit = {}));
function log(level) {
    return function (_, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        return __assign(__assign({}, descriptor), { value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console[level].apply(console, __spreadArray(__spreadArray([propertyKey, '('], args), [')']));
                return originalMethod.apply(this, args);
            } });
    };
}
var Logged = /** @class */ (function () {
    function Logged() {
    }
    Logged.prototype.identity = function (s) {
        return s;
    };
    __decorate([
        log('error')
    ], Logged.prototype, "identity", null);
    return Logged;
}());
var logged = new Logged();
logged.identity('cica');
