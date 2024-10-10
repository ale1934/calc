let num1 = "";
let num2 = "";
let oper;
let result;
let curNum = 1;

function number(x) {
  if (curNum == 1) {
    num1 += x;
    console.log(num1);
    document.getElementById('num1').innerHTML = num1;

  } else {
    num2 += x;
    console.log(num2);
    document.getElementById('num2').innerHTML = num2;

  }
}

function operator(x) {
  oper = x;
  console.log(oper);
  document.getElementById('oper').innerHTML = oper;
  curNum = 2;
}

function refresh() {
  location.reload()
}

function getResult() {
  if (oper == "+")
  {
    result = Number(num1) + Number(num2);
  } else if (oper == "-") {
    result = Number(num1) - Number(num2);
  } else if (oper == "*") {
    result = Number(num1) * Number(num2);
  } else if (oper == "/") {
    result = Number(num1) / Number(num2);
  } else {
    console.log("error! no operator!")
  }

  console.log(result);
  document.getElementById('result').innerHTML = result;
  num1 = ""; num2 = "";
}
