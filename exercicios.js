let resultado = soma(5 ,5)

console.log("O resultado dessa função é : " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let userName = getFirstName("Alessandro Mussolini")

console.log("Welcome " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}