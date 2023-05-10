var edad= prompt("Ingrese su edad.")

if(edad<18 && edad >= 0 ) {
    alert("No puede pasar al bar.")  
}else if(edad<21 && edad >= 18){
    alert("Puede pasar al bar, pero no puede tomar alcohol.")
    if(edad%2 != 0){
        alert("Ademas, ¿Sabias que tu edad es impar?")
    }
}else if(edad < 0){
    alert("Error, su edad no es válida.")
}else if(edad == 21){
    alert("¡Felicidades, llegaste a la mayoría de edad!")
}else if(edad>21 && edad !=21){
    alert("Puede pasar al bar y tomar alcohol.")
    if(edad%2 != 0){
        alert("Ademas, ¿Sabias que tu edad es impar?")
    }
    
}

// Segunda parte del Tp

var numerosecreto = 8

var numsecreto__user = prompt('¿Cual es el número secreto?')

numsecreto__user = Number(numsecreto__user)

if(numerosecreto == numsecreto__user){
    alert('¡Adivinaste!')
}else{
    alert('Erraste, mala suerte!')
    if(numerosecreto < numsecreto__user){
        alert('Pista: De igual forma el número que elegiste es mayor al número secreto!')
    }else if(numerosecreto > numsecreto__user){
        alert('Pista: De igual forma el número que elegiste es menor al número secreto!')
    }
}

// Tercer parte del trabajo - Jubilación de mujeres

var genero = prompt('Ingresa tu genero')

var edadd = prompt('Ingresá tu edad')

edadd = Number(edadd)

if(genero == "masculino" || genero == "Masculino"){
    if(edadd >= 60){
        alert('¡Felicidades, podes jubilarte!')
    }else if(edadd < 0 ){
        alert('Edad Invalida')
    }else{
        alert('Lo siento todavia no podés jubilarte')
    }
}else if(genero == "femenino" || genero == "Femenino"){
    if(edadd >= 65){
        alert('¡Felicidades, podes jubilarte!')
    }else if(edadd < 0 ){
        alert('Edad Invalida')
    }else{
        alert('Lo siento todavia no podés jubilarte')
    }
}else{
    alert('genero invalido (solo esta disponible masculino y femenino)')
}
