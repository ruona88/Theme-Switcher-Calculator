const calcButtons = {
    numbers: document.getElementsByClassName("btn-number"),
    operators: document.getElementsByClassName("btn-operation"),
    reset: document.getElementById("reset"),
    equal: document.getElementById("equal"),
    point: document.getElementById("period"),
    delete: document.getElementById("delete"),
    display: document.getElementById("display"),
    string: "",
    equal: document.getElementById("equal"),
    zero: document.getElementById("zero"),
}

const checkLength = function () {
    if(calcButtons.string.length > 13) {
        document.querySelector(".display").style.fontSize = "20px";
    } else {
        document.querySelector(".display").style.fontSize = "30px";
    }
}


const updateAndDisplay = function (x) {
    let result = calcButtons.string += x.value;
    calcButtons.string = result;
    calcButtons.display.innerHTML = result;
}

//Function to write numbers to the screen
const writeNumbers = function (x) {
    updateAndDisplay(x);
    checkLength();
}

//Loop through the buttons and call function to display the btn value for numbers 1-9
for(let btn of calcButtons.numbers) {
    btn.addEventListener("click", () => {
        writeNumbers(btn);
    })
}

//function to write maths operators to the screen if calcButtons.string.length is greater than 1
//And if the last item in the string is not a maths operand;
const writeOperators = function (x) {
    if(calcButtons.string.length < 1) {
        "";
    } else {
        if(
            calcButtons.string.split("")[calcButtons.string.length-1] === "/" || 
            calcButtons.string.split("")[calcButtons.string.length-1] === "*" || 
            calcButtons.string.split("")[calcButtons.string.length-1] === "-" || 
            calcButtons.string.split("")[calcButtons.string.length-1] === "+"
        ) { "" }
        else {
            updateAndDisplay(x)
        }
    }
}

//Loop through the maths operators and add event listeners
for(let btn of calcButtons.operators) {
    btn.addEventListener("click", () => {
        writeOperators(btn);
    })
}

//Function for the . button
const writePoint = function (x) {
    if(calcButtons.string.includes(".")) {""}
    else {
        if(calcButtons.string.length === 0) {
            let result = calcButtons.string + "0";
            calcButtons.string = result;
            calcButtons.display.innerHTML = result;
        }
        if(calcButtons.string.length > 0) {
            updateAndDisplay(x)
        }
    }
}

//Add event listener to the point button
calcButtons.point.onclick = () => {
    writePoint(calcButtons.point);
}

//Function for the delete button
const deleteFunction = function () {
    let result = calcButtons.string.slice(0, calcButtons.string.length-1);
    calcButtons.string = result;
    if(calcButtons.string.length < 1) {
        calcButtons.display.innerHTML = "0";
    } else {
        calcButtons.display.innerHTML = result;
    }
} 

//Event Listener for the delete function
calcButtons.delete.onclick = () => {
    deleteFunction();
    checkLength();
}

//function for the reset button
const resetFunction = function () {
    calcButtons.string = "";
    calcButtons.display.innerHTML = "0" 
}

//Event handler for the reset button
calcButtons.reset.onclick = resetFunction;

//Function for the zero button
const writeZero = function (x) {
    if (calcButtons.string.length > 0) {
        updateAndDisplay(x)
    } else {
        ""
    }
}

calcButtons.zero.addEventListener("click", () => {
    writeZero(calcButtons.zero);
})


//Function/event handler for the delete button
const displayAnswer = function (x) {
    if(eval(x) === NaN || eval(x) === undefined || eval(x) === Infinity) {
        calcButtons.display.innerHTML = "0";
        calcButtons.string = "";
    } else {
        calcButtons.display.innerHTML = parseFloat(eval(x)).toLocaleString('en-US'); //the toLocalString method inserts the commas
        calcButtons.string = "";
    }
}

//Event Handler to for the equal to button
calcButtons.equal.onclick = () => {
    displayAnswer(calcButtons.string)
}


//Codes to enable users use the keypad
document.addEventListener("keypress", (event) => {
    let numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for(let key of numberKeys) { //Codes to type numbers 1 - 9
        if(event.key === key) {
            let result = calcButtons.string += event.key;
            calcButtons.string = result;
            calcButtons.display.innerHTML = result;
            checkLength();
        }
    }

    let operatorKeys = ["*", "/", "+", "-"];
    for(let key of operatorKeys) { //Codes to type the maths operators
        if(event.key === key) {
            if(calcButtons.string.length < 1) {
                "";
            } else {
                if(
                    calcButtons.string.split("")[calcButtons.string.length-1] === "/" || 
                    calcButtons.string.split("")[calcButtons.string.length-1] === "*" || 
                    calcButtons.string.split("")[calcButtons.string.length-1] === "-" || 
                    calcButtons.string.split("")[calcButtons.string.length-1] === "+"
                ) { "" }
                else {
                    let result = calcButtons.string += event.key;
                    calcButtons.string = result;
                    calcButtons.display.innerHTML = result;
                    checkLength();
                }
            }
        }
    }

    if(event.key === "Enter" || event.key === "=") { //Codes make "Enter" button get answer
        displayAnswer(calcButtons.string);
        checkLength()
    }

    if(event.key === ".") {
        writePoint(calcButtons.point);
        checkLength()
    }

    if(event.key === "0") {
        writeZero(calcButtons.zero);
        checkLength();
    }

})

document.addEventListener("keydown", (event) => { //Keydown Event Listener for the backspace and escape button
    if(event.key === "Escape") {
        resetFunction()
    }

    if(event.key === "Backspace" || event.key === "Delete") {
        deleteFunction()
    }
})