// Matemática simple
function triplicador(num1){
    let resultado = 'El triple es '+ num1*3;
    console.log(resultado)
}

triplicador(parseInt(prompt('Ingresa un número')))

function multiplicador(num2, num3){
    let resultado = 'El resultado de la multiplicación es '+ num2*num3;
    console.log(resultado)
}

multiplicador(parseInt(prompt('multipliquemos, ingresa un número')), parseInt(prompt('Ingresa otro número')))

function division(num2, num3){
    let resultado = 'El resultado de la división es '+ num2/num3;
    console.log(resultado)
}

division(parseInt(prompt('Dividamos, ingresa un número')), parseInt(prompt('Ingresa otro número')))

function resto(num2, num3){
    let resultado = 'El resto es '+ num2%num3;
    console.log(resultado)
}

resto(parseInt(prompt('Calculemos el resto, ingresa un número')), parseInt(prompt('Ingresa otro número')))

resto(division(multiplicador(triplicador(5),12),12),3);

// contarDeA_n
const contar_de_a = 0
const contar_hasta = 0

function contaDeA_n(contar_de_a, contar_hasta){
    if (contar_de_a <= contar_hasta){
        while(contar_de_a <= contar_hasta){
            console.log(contar_de_a)
            contar_de_a++
        }
    }
            
    else{
        console.log('Números invalidos')
    }
}

contaDeA_n(parseInt(prompt('¿Desde que número queres contar?')), parseInt(prompt('¿Hasta que número queres contar?')))

// Desafío FizzBuzz II
let eleccion1 = parseInt(prompt('En el programa va a decir Fizz cuando sea divisible por ...'))
let eleccion2 = parseInt(prompt('En el programa va a decir Buzz cuando sea divisible por ...'))
alert('El programa va a indicar la palabra reservada FizzBuzz cuando sea divisible por ' + eleccion1 + ' y por '+ eleccion2)

function fizzbuzz_2(num1, num2){
    while(num1 <= num2){
        if(num1 % eleccion1 == 0 && num1 % eleccion2 == 0){
            console.log(num1 + ' FizzBuzz')
            num1++
        }
        else if(num1 % eleccion1 == 0){
            console.log(num1 +' Fizz')
            num1++
        }else if(num1 % eleccion2 == 0){
            console.log(num1 +' Buzz')
            num1++
        }else{
            num1++
        }
    }
}

fizzbuzz_2(1, parseInt(prompt('Elegí hasta que número tengo que contar')))
