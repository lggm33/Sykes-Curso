const prompt = require('prompt-sync')({sigint: true});

const printSameLine = text => {process.stdout.write(String(text) +'\r')}

const math = function() {

    let total = 0
    

    const operations = function(num, operation) {
        let error = null

        switch (operation) {
            case "+":
                total += num
                break;
            case '-':
                total -= num
                break
            case '*':
                total *= num
                break
            case '/':
                total /= num
                break
            case '=':
                total = 0
            default:
                error = "No symbole match";
        } 

        return {total, error}
    }

    return operations

}

let endApp = false

const calculate = math()

const operationsOptions = `
  Operations: 
  + -> add
  - -> substract
  * -> multiply
  / -> divide
  = -> total
  `

console.clear()

while (!endApp) {

    console.log(operationsOptions)
  
    let selectOperation = prompt('Select the symbole of your operation: ');
    let number = prompt('Enter a number: ')

    const {total, error} = calculate(Number(number), selectOperation)

    if (!error) {
        console.log(`Your total is ${total}`)
    } else {
        console.log('Invalid number or operation')
    }

    const newOperation = prompt('Do you want to make a new operation? Enter for yes')
    
    if(newOperation.toLowerCase() === 'no') {
        console.log("Perfect, bye")
          endApp = true
    } else {
        console.clear()
    }
  
}