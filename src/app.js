const input = document.querySelector("input");
const a = document.querySelectorAll("#numbers a");

let clickValue = "";
let result = "";
let condition;
let res = "";
const inpres = "";
// let lastinp=""; 
// const op = ["+","-","*","/"];
for(let i = 0; i < a.length; i++ ) {
    // console.log(a.length)
    a[i].addEventListener("click", function(e) {
        //console.log(e.target.textContent);
        clickValue = e.target.textContent;
        // console.log(clickValue)
        // lastinp = input.value.substr(0,input.value.length)
        // lastinp = input.value;
  
        // }
        lastinput = (input.value.charAt(input.value.length-1));
        if(clickValue==("+") || clickValue==("-") || clickValue==("/") || clickValue==("*")) {
            if (lastinput==("+") || lastinput==("-") || lastinput==("/") || lastinput==("*")) {
                // res = input.value.slice(0,-1);
            //    inpres = res += clickValue;
            //    inpres = res+= clickValue;
                // console.log(eval(res)) ; 
                return;
         }
      
            }

        condition = (input.value.includes("+")   || input.value.includes("-") || input.value.includes("/") || input.value.includes("*"));
       
        if (clickValue === "=") {
            if (!condition) {return;}
            // if(!op.includes(lastinp)){return;}
            result = eval(input.value);
            input.value = "";
            input.value = result;

        } else if (clickValue === "AC") {
            input.value = "";
        } else if (clickValue === "C") {
            // console.log(input.value);
            input.value = input.value.substr(0, input.value.length - 1)
        }else {
            if(clickValue == "+" || clickValue == "-" || clickValue == "/" || clickValue == "*" ) {
                if (input.value[input.value.length-1] == clickValue) {
                    return false;
                } else {
                    input.value += clickValue;
                }
            } else {
                input.value += clickValue;
            }
        }
    })
};