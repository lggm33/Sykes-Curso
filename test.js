const math = function() {

    
    let total = 0

    const operations = function(num, operationSymbole) {
        let error = null

        switch (operationSymbole) {
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
                break
            default:
                error = "No symbole match";
        } 

        const result = {
             func1: function() {
                console.log("hola mundo")
             },
             total,
             error
        }

        return  result
    }

    return operations

}



const juanito = math()

juanito(1, '+')
juanito(1, '+')
juanito(1, '+')
juanito(1, '+')
juanito(1, '+')


let {total, error, func1} = juanito()
func1()








