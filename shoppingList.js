const itemsBox = document.querySelector('.items-box');
const addNewItemButton = document.querySelector('.submit-button');
const shopListForm = document.querySelector('.shop-list-form');
const itemList = document.getElementsByClassName('item');
const removeButtons = document.getElementsByClassName('remove-buttons');
const boughtButtons = document.getElementsByClassName('checked-buttons');

const newItemToList = (inputValue) => {
    const newParagraph = document.createElement('p');
    const newButtonsBox = document.createElement('div');
    newParagraph.classList.add('item');
    newParagraph.textContent = inputValue.value;
    itemsBox.appendChild(newParagraph);
    newParagraph.appendChild(newButtonsBox)

    const newCheckButton = () => {
        const newCheckButton = document.createElement('button');
        newCheckButton.classList.add('checked-buttons');
        newCheckButton.textContent = 'Bought';
        newButtonsBox.appendChild(newCheckButton);
    };

    const newRemoveButton = () => {
        const newCheckButton = document.createElement('button');
        newCheckButton.classList.add('remove-buttons');
        newCheckButton.textContent = 'Remove';
        newButtonsBox.appendChild(newCheckButton);
    };

    newCheckButton();
    newRemoveButton();
    additems.value = '';
};

shopListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    newItemToList(additems);
});

itemsBox.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const elementClicked = event.target;
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i] === elementClicked) {
            itemList[i].style.border = '1px solid red';
        } else {
            itemList[i].style.border = '1px solid rgb(221, 221, 221)';
        }
        if (removeButtons[i] === elementClicked) {
            removeButtons[i].parentElement.parentElement.remove();
        }
        if (boughtButtons[i] === elementClicked) {
            itemList[i].style.textDecoration = 'line-through';
        }
    }
});

// const removeItem = (element) => {
//     for(let i = 0; i < removeButtons.length; i++){
//         if(removeButtons[i] === element){
//             removeButtons[i].parentElement.parentElement.remove();
//         }
//     }
// };

// const itemSelected = (element) => {
//     for(let i = 0; i < itemList.length; i++){
//         if(itemList[i] === element){
//             itemList[i].style.border = '1px solid red';
//         }else{
//             itemList[i].style.border = '1px solid rgb(221, 221, 221)';
//         }
//         if(removeButtons[i] === element){
//             removeButtons[i].parentElement.parentElement.remove();
//         }
//         if(boughtButtons[i] === element){
//             itemList[i].style.textDecoration = 'line-through';
//         }
//     }
// };

// const boughtItem = (element) => {
//     for(let i = 0; i < boughtButtons.length; i++){
//         if(boughtButtons[i] === element){
//             itemList[i].style.textDecoration = 'line-through';
//         }
//     }
// };