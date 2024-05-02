//change the count-el in HTML to show the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") 
 
 
//initialize the count as 0
let count = 0


//listen for clicks on the increment button
//increase the count variable when the button is clicked
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0
}

