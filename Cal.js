const disp1 = document.querySelector(".disp1");
const disp2 = document.querySelector(".disp2");
const tempResult = document.querySelector(".tempresult");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const allclear = document.querySelector(".allclear");
const clearLast = document.querySelector(".clearlast");
let dis1Num = "";
let middleOperation = "";
let dis2Num = "";
let result = null;
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === ".") {
      
    } else if (e.target.innerText === "." ) {
      return;
    }
    dis2Num += e.target.innerText;
    disp2.innerText = dis2Num;
  });
});
operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && middleOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clear(operationName);
    middleOperation = operationName;
    console.log(result);
  });
});
function clear(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  disp1.innerText = dis1Num;
  disp2.innerText = "";
  dis2Num = "";
  tempResult.innerText = result;
}
function mathOperation() {
  if (middleOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (middleOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (middleOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (middleOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (middleOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
equal.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  mathOperation();
  clear();
  disp2.innerText = result;
  tempResult.innerText = "";
  dis2Num = result;
  dis1Num = "";
});
allclear.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  disp1.innerText = "";
  disp2.innerText = "";
  result = "";
  tempResult.innerText = "";
});
clearLast.addEventListener("click", () => {
  disp2El.innerText = "";
  dis2Num = "";
});
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButton(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");

  } else if ( e.key === "=") {
    clickEqual();
  }
});
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}
