"use strict"

window.onload = init;

function init() {
const addBtn = document.getElementById("addBtn");
 addBtn.onclick = onAddBtnClicked;

 const subtractBtn = document.getElementById("subtractBtn");
 subtractBtn.onclick = onSubtractBtnClicked;

 const multiplyBtn = document.getElementById("multiplyBtn");
 multiplyBtn.onclick = onMultiplyBtnClicked;

 const divideBtn = document.getElementById("divideBtn");
 divideBtn.onclick = onDivideBtnClicked;
 
}

function onAddBtnClicked() {
    const number1Field = document.getElementById("number1Field").value;
    let  digit1 = Number(number1Field);
    const number2Field = document.getElementById("number2Field").value;
    let  digit2 = Number(number2Field);
    let answer = digit1 + digit2;
    let answerField = document.getElementById("answerField");
    answerField.value = answer;
}

function onSubtractBtnClicked() {
    const number1Field = document.getElementById("number1Field").value;
    let  digit1 = Number(number1Field);
    const number2Field = document.getElementById("number2Field").value;
    let  digit2 = Number(number2Field);
    let answer = digit1 - digit2;
    let answerField = document.getElementById("answerField");
    answerField.value = answer;
}

function onMultiplyBtnClicked() {
    const number1Field = document.getElementById("number1Field").value;
    let  digit1 = Number(number1Field);
    const number2Field = document.getElementById("number2Field").value;
    let  digit2 = Number(number2Field);
    let answer = digit1 * digit2;
    let answerField = document.getElementById("answerField");
    answerField.value = answer;
}
function onDivideBtnClicked() {
    const number1Field = document.getElementById("number1Field").value;
    let  digit1 = Number(number1Field);
    const number2Field = document.getElementById("number2Field").value;
    let  digit2 = Number(number2Field);
    let answer = digit1 / digit2;
    let answerField = document.getElementById("answerField");
    answerField.value = answer;
}