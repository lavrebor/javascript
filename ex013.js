var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log(`${diaSem} corresponde a Domingo em JavaScript.`)
        break
    case 1:
        console.log(`${diaSem} corresponde a Segunda-Feira em JavaScript.`)
        break 
    case 2:
        console.log(`${diaSem} corresponde a Terça-Feira em JavaScript.`)
        break 
    case 3:
        console.log(`${diaSem} corresponde a Quarta-Feira em JavaScript.`)
        break
    case 4:
        console.log(`${diaSem} corresponde a Quinta-Feira em JavaScript.`)
        break 
    case 5:
        console.log(`${diaSem} corresponde a Sexta-Feira em JavaScript.`)
        break 
    case 6:
        console.log(`${diaSem} corresponde a Sábado em JavaScript.`)
        break
    default:
        console.log(`${diaSem} é uma data inválida.`)
        break
}