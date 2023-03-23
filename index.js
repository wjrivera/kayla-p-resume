const selectAll = document.getElementById("select-all")
const inboxCheckboxes = document.querySelectorAll(".inbox-checkboxes")


function changeBackground() {
    for(let i = 0; i < inboxCheckboxes.length; i++){
        inboxCheckboxes[i].addEventListener('change', (e) => {
            const changeBg = document.getElementById(e.target.id)
            changeBg.parentElement.classList.toggle('bg-lightgrey')
        })
    }
}

changeBackground()

selectAll.addEventListener('change',function(e){
    inboxCheckboxes.forEach(n=>n.checked=this.checked)
    for(let i = 0; i < inboxCheckboxes.length; i++){
            inboxCheckboxes[i].parentElement.classList.toggle('bg-lightgrey')
        } 
})

inboxCheckboxes.forEach( n=>{
  n.addEventListener('change',function(e){
    if( !this.checked && selectAll.checked )selectAll.checked=false
  })
})

// selectAll.addEventListener("change", () => {
//     Array.from(inboxCheckboxes).map((inbox) => {
//         if(inbox.checked = selectAll.checked){
//             for(let i = 0; i < inboxCheckboxes.length; i++){
//                 inboxCheckboxes[i].parentElement.classList.add('bg-lightgrey')
//             } 
//         } else {
//             for(let i = 0; i < inboxCheckboxes.length; i++){
//                 inboxCheckboxes[i].parentElement.classList.remove('bg-lightgrey')
//             }
//         }
//     })
    
// })

/* Work in progress on making search bar functional to highlight text

function searchText() {
        let search = document.getElementById("search").value.trim()
        const inboxHistory = document.getElementById("inbox-history")

        if (search !== "") {
            let regExp = new RegExp(search, "gi")
            inboxHistory.innerHTML = (inboxHistory.textContent).replace(regExp, match => `<mark>${match}</mark>`)
        }
}*/
