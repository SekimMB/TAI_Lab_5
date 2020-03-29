"use strict";
class Complex {
    constructor(rl, img) {
        this.real = rl;
        this.imaginary = img;
    }
    add(imNum1) {
        return new Complex(imNum1.real + this.real, imNum1.imaginary + this.imaginary);
    }
    subtract(imNum1) {
        return new Complex(this.real - imNum1.real, this.imaginary - imNum1.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        return this.real + " + " + this.imaginary + "i";
    }
}
let num1 = new Complex(2, 3);
let num2 = new Complex(5, 6);
let num3 = num1.add(num2);
console.log("Dodawanie " + num3.toString());
let num4 = num3.subtract(num1);
console.log("Odejmowanie: " + num4.toString());
let modulo = num4.mod();
console.log("modul: " + modulo);
