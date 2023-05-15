
let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("del-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("Double clicked")
    localStorage.clear()
    myLeads = ""
    renderLeads()
})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))



    renderLeads()
    console.log( localStorage.getItem("myLeads"))
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