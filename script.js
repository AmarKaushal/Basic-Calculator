const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";

function updateDisplay(value){
    display.textContent = value;
    display.scrollLeft = display.scrollWidth;
}

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const val = btn.textContent;
        display.style.color = "#fff";
        if(val === "AC"){
            expression="";
            updateDisplay("0");}

        else if(val==="D"){
            expression = expression.slice(0,-1);
            updateDisplay(expression) || "0";}

        else if(val==="="){
            try{
                let exp = expression
                .replace(/x/g, "*")
                .replace(/÷/g, "/");
                const result = eval(exp);
                expression = result.toString();
                updateDisplay(expression);
                display.style.color = "#00ff7f";
            }catch{
                updateDisplay("Error");
                expression="";
                display.style.color = "#ff3b6c";
            }
      }
      else{
        expression += val;
        updateDisplay(expression);
      }
    });
  });