//select elements

const input_element = document.querySelector('.input');
const output_element = document.querySelector('.result value');
const output_result_element = document.querySelector('.result value');


//  SOME VARIABLES

const OPERATORES = ["+", "-", "*", "/"];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";

let data = {
    operation : [],
    formula : []
}

let calculator_buttons = [];

// CREATE CALCULATOR BUTTONS 
function createCalculatorButtons(){
    const bnts_per_row = 8;
    let added_btns = 0;

    calculator_buttons.forEach(button => {
        if(added_btns % bnts_per_row == 0){
            input_element.innerHTML += '<div class = "row"></div>';
        }

        const row = document.querySelector(".row:last-child");
        row.innerHTML += '<button id=" ${button.name}">
                                   ${button.symbl}
                                   </button>';
       
         added_btns++;                          

    })
}

createCalculatorButtons();

