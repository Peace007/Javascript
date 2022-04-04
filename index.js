


document.addEventListener('DOMContentLoaded', () => {
	getLocalTodo();
	// console.log(localStorage.getItem("todo", JSON.stringify('todo')));



});



// var todoArray = [];

function todoItemCreation() {

	// *********************************** 1) Item Creation **********************************************

	// Todo-Div-Creation    
	const createDiv = document.createElement('div');
	createDiv.classList.add('todo-item');
	document.body.appendChild(createDiv);

	// Todo-Child-div-Creation    
	const createChildDiv = document.createElement('label');
	createChildDiv.classList.add('todo-item-lbl');
	createChildDiv.innerHTML = document.getElementById('inputElem').value;
	createDiv.appendChild(createChildDiv);

	//Save Localhost Todo
	saveLocalTodo(createChildDiv.innerHTML);

	// Todo-Delete-Button-Creation
	var toddoDeleteButton = document.createElement('button');
	toddoDeleteButton.classList.add('delete-btn');
	toddoDeleteButton.innerHTML = 'Delete';
	createDiv.appendChild(toddoDeleteButton);

	// removeLocalTodo();

	// Todo-Done-Button-Creation
	var toddoDoneButton = document.createElement('button');
	toddoDoneButton.classList.add('done-btn');
	toddoDoneButton.innerHTML = 'Mark Checked';
	createDiv.appendChild(toddoDoneButton);

	// Todo-Edit-Button-Creation
	var toddoEditButton = document.createElement('button');
	toddoEditButton.classList.add('edit-btn');
	toddoEditButton.innerHTML = 'Edit';
	createDiv.appendChild(toddoEditButton);


	// Todo-Update-Button-Creation
	var toddoUpdateButton = document.createElement('button');
	toddoUpdateButton.classList.add('update-btn');
	toddoUpdateButton.innerHTML = 'Update';
	createDiv.appendChild(toddoUpdateButton);

	// Clear-Todo-Input-Value
	document.getElementById('inputElem').value = ''

	// *********************************** 1) Item Delete **********************************************
	toddoDeleteButton.addEventListener('click', function () {
		createDiv.remove();
		for (var i = 0; i < obj.length; i++) {
			console.log(i);
		}
	});

	// *********************************** 1) Item Done **********************************************
	toddoDoneButton.addEventListener('click', function (e) {
		this.parentElement.classList.toggle('done')
	});

	// ************************************ 1) Item Edit **********************************************
	toddoEditButton.addEventListener('click', function (e) {
		const updatedInput = document.querySelector('.updateInputValue');
		document.querySelector('.updateInputValue').classList.toggle('active')
		createDiv.appendChild(updatedInput);
	});

	// *********************************** 1) Add Edit Item Value **********************************************
	toddoUpdateButton.addEventListener('click', function (e) {
		// get-updated-Input-Value
		const updatedInputText = this.parentElement.querySelector('.updateInputValue').value;
		document.querySelector('.todo-item-lbl').innerHTML = updatedInputText;
	});
}

function saveLocalTodo(todo) {
	let todos;
	if (localStorage.getItem('todo') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todo'));
	}
	todos.push(todo);
	localStorage.setItem("todo", JSON.stringify(todos));
}


function getLocalTodo() {
	let todos;
	if (localStorage.getItem('todo') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todo'));
	}
	localStorage.getItem("todo", JSON.stringify(todos));

	todos.forEach((todo) => {
		// Todo-Div-Creation    
		const createDiv = document.createElement('div');
		createDiv.classList.add('todo-item');
		document.body.appendChild(createDiv);

		// Todo-Child-div-Creation    
		const createChildDiv = document.createElement('label');
		createChildDiv.classList.add('todo-item-lbl');
		createChildDiv.innerHTML = todo;
		createDiv.appendChild(createChildDiv);

		// Todo-Delete-Button-Creation
		var toddoDeleteButton = document.createElement('button');
		toddoDeleteButton.classList.add('delete-btn');
		toddoDeleteButton.innerHTML = 'Delete';
		createDiv.appendChild(toddoDeleteButton);


		// Todo-Done-Button-Creation
		var toddoDoneButton = document.createElement('button');
		toddoDoneButton.classList.add('done-btn');
		toddoDoneButton.innerHTML = 'Mark Checked';
		createDiv.appendChild(toddoDoneButton);

		// Todo-Edit-Button-Creation
		var toddoEditButton = document.createElement('button');
		toddoEditButton.classList.add('edit-btn');
		toddoEditButton.innerHTML = 'Edit';
		createDiv.appendChild(toddoEditButton);


		// Todo-Update-Button-Creation
		var toddoUpdateButton = document.createElement('button');
		toddoUpdateButton.classList.add('update-btn');
		toddoUpdateButton.innerHTML = 'Update';
		createDiv.appendChild(toddoUpdateButton);
	})
}


function removeLocalTodo(todo) {
	let todos;
	if (localStorage.getItem('todo') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todo'));
	}
	console.log(todo);
}




// *********************************** 1) Hide Updated Input **********************************************

document.getElementById('inputElem').addEventListener("keyup", function (event) {
	if (event.key === 'Enter') {
		todoItemCreation();
		document.getElementById('inputElem').value = ''
	}
});



