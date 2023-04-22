let modelCalc = document.querySelector(".calculadora");
let btnPad = document.querySelector(".btnPad");

let buttons = document.querySelector(".botoes");
let linha = document.querySelector("hr");

let alternar = document.querySelector(".bxs-moon");
let menubtn =  document.getElementById("new")

alternar.addEventListener("click", () => {
    modelCalc.classList.toggle("dark");
    btnPad.classList.toggle("dark");
    buttons.classList.toggle("dark");
    linha.classList.toggle("dark");
})

alternar.onclick = () => {
    alternar.classList.toggle('bxs-sun');
}
