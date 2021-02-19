class Calculator {
    constructor() {
        this.value =0
    }
    
    add(valueToAdd) {
        this.value = this.value + valueToAdd
    }

    subract(valueToSubtract) {
        this.value = this.value - valueToSubtract
    }

    multiply(valueToMultiply) {
        this.value = this.value * valueToMultiply
    }

    divide(valueToDivide) {
        this.value = this.value / valueToDivide
    }
    
    //add, subtract, multiply, divide are all commands
    //we want to take these commands out of our calculator

}

const calculator = new Calculator()
calculator.add(10)
console.log(calculator.value)
calculator.subract(5)
console.log(calculator.value)
calculator.divide(3)
console.log(calculator.value)
calculator.multiply(2)
console.log(calculator.value)