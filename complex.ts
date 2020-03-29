class Complex{
    private real: number;
    private imaginary: number;
    constructor(rl: number, img: number){
        this.real = rl;
        this.imaginary = img;
    }
    add(imNum1: Complex): Complex{
        return new Complex(imNum1.real+this.real,imNum1.imaginary+this.imaginary);
    }
    subtract(imNum1: Complex): Complex{
        return new Complex(this.real-imNum1.real,this.imaginary-imNum1.imaginary);
    }
    mod(): number{
        return Math.sqrt(Math.pow(this.real,2)+Math.pow(this.imaginary,2));
    }
    toString():string{
        return this.real+" + "+this.imaginary+"i";
    }
}

let num1:Complex = new Complex(2,3);
let num2:Complex = new Complex(5,6);

let num3:Complex = num1.add(num2);
console.log("Dodawanie "+num3.toString());
let num4:Complex = num3.subtract(num1);
console.log("Odejmowanie: "+num4.toString());
let modulo:number = num4.mod();
console.log("modul: "+modulo);