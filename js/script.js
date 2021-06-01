let countEl = document.getElementById("Count-Number")
let saveEL = document.getElementById("last-el")
let count = 0;

function increment(){
    count = count + 1;
    countEl.innerText = count
}
function save(){
    saveEL.textContent += count + " - "
    count = 0
}
