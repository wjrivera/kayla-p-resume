const selectAll = document.getElementById("select-all")
const inboxCheckboxes = document.querySelectorAll(".inbox-checkboxes")

function checkAll() {
    const isChecked = selectAll.checked
    for (let i = 0; i < inboxCheckboxes.length; i++) {
        inboxCheckboxes[i].checked = isChecked
    }
}

selectAll.addEventListener("change", () => {
    Array.from(inboxCheckboxes).map((inbox) => {
        inbox.checked = selectAll.checked
    })
})

/* Work in progress on making search bar functional to highlight text

function searchText() {
        let search = document.getElementById("search").value.trim()
        const inboxHistory = document.getElementById("inbox-history")

        if (search !== "") {
            let regExp = new RegExp(search, "gi")
            inboxHistory.innerHTML = (inboxHistory.textContent).replace(regExp, match => `<mark>${match}</mark>`)
        }
}*/
