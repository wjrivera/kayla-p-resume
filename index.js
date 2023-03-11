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

function searchText() {
    const search = document.getElementById("search").value
    const inboxItem = document.getElementsById("inbox-history")
    search = search.replace(/[a-z]\w/g)

    let pattern = new RegExp(`${search}`,"gi")

    inboxItem.innerHTML = search.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
