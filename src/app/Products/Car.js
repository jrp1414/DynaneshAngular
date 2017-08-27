"use strict";
var Car = (function () {
    function Car() {
    }
    Car.prototype.GetMilage = function (val1, val2) {
        return val1;
    };
    return Car;
}());
exports.Car = Car;
var Bus = (function () {
    function Bus() {
    }
    Bus.prototype.GetMilage = function (val1, Val2) {
        return val1;
    };
    return Bus;
}());
exports.Bus = Bus;
var Vehicale = (function () {
    function Vehicale() {
        var car = new Car();
        //car.GetMilage()
        var bus = new Bus();
        //bus.GetMilage<number>(25, 26);
        //bus.GetMilage(25, 26);
    }
    return Vehicale;
}());
exports.Vehicale = Vehicale;
//# sourceMappingURL=Car.js.map