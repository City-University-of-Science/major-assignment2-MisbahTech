//select elements

const input_element = document.querySelector('.input');
const output_element = document.querySelector('.result.value');
const output_result_element = document.querySelector('.result.value');


//  SOME VARIABLES

const OPERATORES = ["+", "-", "*", "/"];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";

let data = {
    operation : [],
    formula : []
}
let ans = 0;
// CALCULATOR BUTTONS

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
        row.innerHTML += '<button id="${button.name}">
                                   ${button.symbl}
                                   </button>';
       
         added_btns++;                          

    })
}

createCalculatorButtons();

// Rad and deg
 let Radian  = true;
 const rad_btn = document.getElementById('rad')
 const deg_btn = document.getElementById("deg")

 rad_btn.classlist.add("active-angle");

 function angleToggler(){
    rad_btn.classlist.toggle("active-angle");
    deg_btn.classlist.toggle("active-angle");

 }


// CLICK EVENT LISTENER
input_element.addEventListener("click", event =>{
    const target_btn = event.target;

    calculator_buttons.foreach(button => {
        if(button.name == target_btn.id) calculator (button);
    })
})


//Calculator
function calculator(button){
    if(button.type == "operator"){
     data.operation.push(button.symbol);
     data.formula.push(button.formula);
    }else if(button.type == "number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }else if(button.type == "trigo_function"){

          data.operation.push(button.symbol);
          data.operation.push(button.formula);

    } else if(button.type == "math_function"){
      console.log("math")
      let symbol, formula;

      if(button.name == "factorial"){
        symbol ="|";
        formula = button.formula;
        data.operation.push(symbol);
        data.formula.push(formula);
      }else if(button.name == "power"){
        symbol ="^(";
        formula = button.formula;
        data.operation.push(symbol);
        data.formula.push(formula);
      } else if (button.name == "square"){
        symbol ="^(";
        formula = button.formula;
        data.operation.push(symbol);
        data.formula.push(formula);
        data.operation.push("2");
        data.formula.push("2");
      }{
        symbol=button.symbol +"(";
        formula = button.formula +"(";
        data.operation.push(symbol);
        data.formula.push(formula);
      }
    } else if(button.type =="key"){
        if(button.type == "clear"){
            data.operation =[];
            data.formula = [];

            UpdateOutputResult(0);
        }

    } else if(button.name == "delete"){
        data.operation.pop();
        data.formula.pop();
    } else if(button.name == "rad"){
        Radian = true;
        angleToggler();
    }else if(button.name == "deg"){
        Radian = false;
        angleToggler();
    }
    else if(button.type == "calculator"){
        formula_str = data.formula.join('');

        let result = eval(formula_str);

        UpdateOutputResult(result);
    }


    UpdateOutputOperation(data.operation.join(''));
}

//update output
function UpdateOutputOperation(operation){
    output_operation_element.innerHTML== operation 
}
function UpdateOutputResult(result){
    output_result_element.innerHTML = result
}

// Factorial Function
function factorial (number){
    if(number === 0 || number === 1) return 1;

    let result = 1;
    for(let i = 0; i<=number; i++){
        result *= i;
        if(result === infinity) return infinity
    }
    return result;
}


// Trignometric functions
function trigo(callback, angle){

    if (!Radian){
        angle = angle = Math.PI/180;
    }
    return callback(angle);
}
function inv_trigo(callback, value){}{

    let angle = callback(value);
    if (!Radian){
        angle = angle = 180/Math.pi;
    }

    return angle;

}