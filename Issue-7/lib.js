// Select the <body> element
let body = document.body;

let itemCount = 1;

let addItem = () => {
  let list = document.getElementById('list');
  let listItem = document.createElement('li');
  listItem.innerHTML = `Item #${itemCount}`;
  list.appendChild(listItem);
  itemCount++;
}

let removeItem = () => {
  let list = document.getElementById('list');
  let lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
  itemCount--;
}


let titleItem = document.createElement('h1');
titleItem.innerHTML = 'My List';

// Add a list element as a child of the body
let newList = document.createElement('ul');
newList.id = 'list';

let buttonRow = document.createElement('section');

// Add 2 button as children to the <body> element
// The first button should add an list item element to the newly created list
let addItemButton = document.createElement('button');
addItemButton.innerHTML = 'Add Item';
addItemButton.addEventListener('click', addItem);
// The second button should remove a list item from the list
let removeItemButton = document.createElement('button');
removeItemButton.innerHTML = 'Remove Item';
removeItemButton.addEventListener('click', removeItem);

buttonRow.appendChild(addItemButton);
buttonRow.appendChild(removeItemButton);

body.appendChild(titleItem);
body.appendChild(newList);
body.appendChild(buttonRow);
