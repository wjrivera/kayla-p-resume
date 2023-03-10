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
