console.log('Acá arranca el ejercicio Escribí while Loops')

var num = -10;
while( num >= -10 && num <= 19){
    console.log(num)
    num++
}

num = 10

while(num >=10 && num <= 40){
    if(num%2 == 0){
        console.log(num)
        num++
    }
    else{
        num++
    }
}

num = 300

while(num >=300 && num <= 330){
    if(num%2 != 0){
        console.log(num)
        num++
    }
    else{
        num++
    }
}

num = 5

while(num >=5 && num <= 50){
    if(num%3 == 0 && num%5 == 0){
        console.log(num)
        num++
    }
    else{
        num++
    }
}

console.log('Mi Primer Bot')

var num_clientes = 1

while(num_clientes >=1 && num_clientes <= 20){
    alert('¡Bienvenid@ a mi café! Su mesa es la ' + num_clientes)
    num_clientes++

}

console.log('Par o Impar')

var num_user = prompt('Elegí un número')
num_user = Number(num_user)
num_user = parseInt(num_user)

while(num_user > 0){
    if(num_user %2 == 0){
        alert('Tu número es par')
        num_user = prompt('Elegí otro número')
        num_user = Number(num_user)
        num_user = parseInt(num_user)
    }else if(num_user %2 != 0){
        alert('Tu número es impar')
        num_user = prompt('Elegí otro número')
        num_user = Number(num_user)
        num_user = parseInt(num_user)
        
    }
}

console.log('FizzBuzz')

var num_fizzbuzz = 1

while(num_fizzbuzz >= 1 && num_fizzbuzz <= 100){
    if(num_fizzbuzz %3 == 0 && num_fizzbuzz %5 == 0){
        console.log('FizzBuzz')
        num_fizzbuzz++
    }else if(num_fizzbuzz %3 == 0){
        console.log('Fizz')
        num_fizzbuzz++
    }else if(num_fizzbuzz %5 == 0){
        console.log('Buzz')
        num_fizzbuzz++
    }else{
        console.log(num_fizzbuzz)
        num_fizzbuzz++
    }
}

// console.log('Contador de Positivos')

// var numero_user = parseInt(Number(prompt('Ingresá un número entero')))

// while(numero_user >= 0){
//     numero_user = parseInt(Number(prompt('Ingresá otro número entero')))
// }
// alert('los números ingresados fueron: ')

console.log('Burro-Mático')

var resp = prompt('¿Ya merito llegamos?')
resp = resp.toLowerCase ()

if(resp == "si"){
    alert('¡¡Bienvenido a Muy Muy Lejano!!')
}else{
    while(resp != "si"){
        resp = prompt('¿Ya merito llegamos?')
        resp = resp.toLowerCase ()
    }
}




console.log('¿Cuál es el mayor?')

var numero__user__opc1 = prompt('Ingresa un número')
numero__user__opc1 = Number(numero__user__opc1)

var numero__user__opc2 = prompt('Ingresa otro número')
numero__user__opc2 = Number(numero__user__opc2)

while(numero__user__opc1 != 0 && numero__user__opc2 != 0){
    if(numero__user__opc1 > numero__user__opc2){
        alert(numero__user__opc1 + ' es mayor a '+ numero__user__opc2)
        var numero__user__opc1 = prompt('Ingresa un número')
    numero__user__opc1 = Number(numero__user__opc1)

    var numero__user__opc2 = prompt('Ingresa otro número')
    numero__user__opc2 = Number(numero__user__opc2)
    }else if(numero__user__opc1 < numero__user__opc2){
        alert(numero__user__opc1 + ' es menor a '+ numero__user__opc2)
        var numero__user__opc1 = prompt('Ingresa un número')
    numero__user__opc1 = Number(numero__user__opc1)

    var numero__user__opc2 = prompt('Ingresa otro número')
    numero__user__opc2 = Number(numero__user__opc2)
    }else if(numero__user__opc1 == numero__user__opc2){
        numero__user__opc1 = prompt('Son iguales, vamos devuelta, ingresa un número')
        numero__user__opc1 = Number(numero__user__opc1)

        numero__user__opc2 = prompt('Ingresa otro número')
        numero__user__opc2 = Number(numero__user__opc2)
    }
}

console.log('Piedra, papel o tijera')

var nt = "si"
while(nt == "si" ){

    var pc__valor = Math.random()
    console.log(pc__valor)

    var ppt = prompt('Ingrese Piedra, Papel o Tijera')
    ppt = ppt.toLowerCase()
    if(ppt == 'papel' ||ppt == 'piedra' ||ppt == 'tijera'  ){
        if(pc__valor > 0.5){
            alert('¡Felicidades, ganaste!')
        }else if(pc__valor < 0.5){
            alert('¡Perdiste!')
        }
        nt = prompt('Indicá Si para volver a jugar')
        nt = nt.toLowerCase()
    }else{
        alert('Valor invalido')
        nt = prompt('Indicá Si para volver a jugar')
        nt = nt.toLowerCase()
    }
}

console.log('Adiviná un número')

var num_nn = prompt('Ingresa un número entre el 1 y el 10')
num_nn = parseInt(num_nn)

var min = 1

var num_secreto = min + Math.floor(Math.random() * num_nn);
console.log(num_secreto)

if(num_nn <=10 && num_nn >= 1){
    
    
    var adivinar_user = prompt('Adivina cual es el número generado')
    adivinar_user = parseInt(adivinar_user)
    while(adivinar_user != num_secreto){
            
        if(adivinar_user<num_secreto){
            alert('El número secreto es mayor a '+ adivinar_user)
                    
        }
        else if(adivinar_user>num_secreto){
                    alert('El número secreto es menor a '+ adivinar_user)
                    
                
        }
        adivinar_user = prompt('Adivina cual es el número generado')
        adivinar_user = parseInt(adivinar_user)
    }
    if(adivinar_user == num_secreto){
        alert('Adivinaste! El número secreto era '+num_secreto)
    }
}else{
    alert('Incorrecto, valor no válido')
}

console.log('¡Bienvenida para N!')

var invitado = 1

while(invitado >= 1 && invitado <= 5){
    if(invitado == 1){
    alert('¡¡Bienvenido a la fiesta '+ invitado + '!!')
    invitado++
    }   
    else if(invitado == 2){
        alert('¡¡Bienvenido a la fiesta '+ invitado + '!! Te presento a 1')
        invitado++
    }  
    else if(invitado == 3){
        alert('¡¡Bienvenido a la fiesta '+ invitado + '!! Te presento a 1 y a 2')
        invitado++
    }  
    else if(invitado == 4){
        alert('¡¡Bienvenido a la fiesta '+ invitado + '!! Te presento a 1, 2 y a 3')
        invitado++
    }  
    else if(invitado == 5){
        alert('¡¡Bienvenido a la fiesta '+ invitado + '!! Te presento a 1, 2, 3 y a 4')
        invitado++
    }  
}


