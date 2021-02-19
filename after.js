class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}
//this looks like a lot of similar code
//but it's because the calculator is basic

//the command pattern scales very well
//especially when we want to chain commands to 
//create more complex functionality

//e.g.
//save
//exit
//save and exit

//normally would involve 3 separate functions, duplicating 'save' and 'exit' in 'save and exit'
//but now we can make 'save' and 'exit' 
//and chain it to create 'save and exit'

class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
      this.addCommand = new AddCommand(valueToAdd)
      this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }
  
    execute(currentValue) {
      const newValue = this.addCommand.execute(currentValue)
      return this.multiplyCommand.execute(newValue)
    }
  
    undo(currentValue) {
      const newValue = this.multiplyCommand.undo(currentValue)
      return this.addCommand.undo(newValue)
    }
  }

const calculator = new Calculator()
// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new MultiplyCommand(2))
calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
console.log(calculator.value)
calculator.undo()
console.log(calculator.value)
calculator.executeCommand(new SubtractCommand(5))
console.log(calculator.value)
calculator.executeCommand(new DivideCommand(2))
console.log(calculator.value)
