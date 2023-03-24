const selectAll = document.getElementById("select-all")
const inboxCheckboxes = document.querySelectorAll(".inbox-checkboxes")
const $search = document.getElementById('search');
const $box = document.getElementsByClassName('searchable');

function changeBackground() {
    for (let i = 0; i < inboxCheckboxes.length; i++) {
        inboxCheckboxes[i].addEventListener('change', (e) => {
            const changeBg = document.getElementById(e.target.id)
            changeBg.parentElement.classList.toggle('bg-lightgrey')
        })
    }
}

changeBackground()

//here we want to check if the checkbox is already "checked" or not
//if so, then let's change the background, otherwise, remove the styling class.
//you can use for loops or the forEach extension method.
//we are not using the event parameter, so you can add a _ to look cleaner.
selectAll.addEventListener('change', function (_) {
    inboxCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked;
        if (checkbox.checked)
            checkbox.parentElement.classList.add('bg-lightgrey')
        else
            checkbox.parentElement.classList.remove('bg-lightgrey')
    });
})

inboxCheckboxes.forEach(n => {
    n.addEventListener('change', function (e) {
        if (!this.checked && selectAll.checked) selectAll.checked = false
    })
})

// References:
// https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
// https://www.coderperfect.com/array-foreach-is-used-to-go-over-the-results-of-getelementsbyclassname-in-js/

//Were, we get the text from the input, go through all searchable classes and replace
//the text with mark tag with class styling "highlight" which is defined in your css.
//We are checking for text longer than 2 characters, but you can remove that if you want.
$search.addEventListener('input', (event) => {
    const searchText = event.target.value;
    const regex = new RegExp(searchText, 'gi');

    Array.from($box).forEach((element) => {
        let text = element.innerHTML;
        if (text.length <= 2) return;
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
        element.innerHTML = text.replace(regex, '<mark class="highlight">$&</mark>');
    });
});