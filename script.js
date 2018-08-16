let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
	e.preventDefault();

	let newItem = document.getElementById('item').value;
	let li = document.createElement('li');
	let deleteBtn = document.createElement('button');

	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(newItem));

	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	deleteBtn.appendChild(document.createTextNode('X'));

	itemList.appendChild(li);
	li.appendChild(deleteBtn);
}

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm("Sure?")) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function filterItems(e) {
	let text = e.target.value.toLowerCase();
	let items = itemList.getElementsByTagName('li');

	Array.from(items).forEach((item) => {
		let itemName = item.firstChild.textContent;

		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}

