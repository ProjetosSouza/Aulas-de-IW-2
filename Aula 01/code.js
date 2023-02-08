/*
var total //global
let num1 //local
const total = 0 //local
*/
let num1 = 3
let num2 = 2

function soma(){
    console.log(num1+num2)
}
function sub(){
    console.log(num1-num2)
}
function div(){
    console.log(num1/num2)
}
function mult(){
    console.log(num1*num2)
}

console.log("A soma é: " + soma()+ 
            "A subtração é: " + sub()+
            "A divisão é: " + div ()+
            "A multiplicação é: " +mult ())
sub()
div()
mult()
soma()