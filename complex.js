var Complex = /** @class */ (function () {
    function Complex(rl, img) {
        this.real = rl;
        this.imaginary = img;
    }
    Complex.prototype.add = function (imNum1) {
        return new Complex(imNum1.real + this.real, imNum1.imaginary + this.imaginary);
    };
    Complex.prototype.subtract = function (imNum1) {
        return new Complex(this.real - imNum1.real, this.imaginary - imNum1.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        return this.real + " + " + this.imaginary + "i";
    };
    return Complex;
}());
var num1 = new Complex(2, 3);
var num2 = new Complex(5, 6);
var num3 = num1.add(num2);
console.log("Dodawanie " + num3.toString());
var num4 = num3.subtract(num1);
console.log("Odejmowanie: " + num4.toString());
var modulo = num4.mod();
console.log("modul: " + modulo);
