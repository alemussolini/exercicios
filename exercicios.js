let resultado = soma(14 ,21)

console.log("O resultado dessa função é : " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let userName = getFirstName("Alessandro Mussolini", " ")
console.log("Welcome " + userName)

userName = getFirstName("Andressa-Mussolini", "-")
console.log("Welcome " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}