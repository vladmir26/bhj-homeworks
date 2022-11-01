const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', onCheckboxChange);
});

function onCheckboxChange(event) {
    const parent = event.target.closest('.interest');
    const innerList = parent.querySelector('.interests');

    if(innerList) {
        const innerCheckboxes = innerList.querySelectorAll('.interest__check');
        innerCheckboxes.forEach((innerCheckbox) => {
            innerCheckbox.checked = event.target.checked;
        });
    }
};