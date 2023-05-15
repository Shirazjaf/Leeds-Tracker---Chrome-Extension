
let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value=""
    renderLeads()
} )

function renderLeads() {
    let listItems = ""
for (i=0; i < myLeads.length; i++) {

    listItems +=  `
        <li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
        </li>
    `

}

ulEl.innerHTML = listItems

}