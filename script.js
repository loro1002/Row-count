

let countEl = document.getElementById('count-el')
let res = document.getElementById('res')
let num = 0
function count() {
    num += 1
    countEl.innerHTML = num
}

function save() {
    res.textContent += ' - ' + num
    res.textContent = res.textContent
    num = 0
    countEl.innerHTML = 0
}