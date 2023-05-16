
let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("del-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("save-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)

    })

})

function render(leads) {
    let listItems = ""
for (i=0; i < leads.length; i++) {

    listItems +=  `
        <li>
            <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>
        </li>
    `

}

ulEl.innerHTML = listItems

}

deleteBtn.addEventListener("dblclick", function() {
    console.log("Double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
} )

