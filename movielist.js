let id = 0;

//adding elements to the table
document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-movie').value;
    row.insertCell(1).innerHTML = document.getElementById('new-character').value;
    row.insertCell(2).innerHTML = document.getElementById('new-viewed-date').value;
    let action = row.insertCell(3);

//add the remove button to the table

    action.appendChild(createRemoveButton(id++));

    //resets the values to default after submission

    document.getElementById('new-movie').value = '';
    document.getElementById('new-character').value = '';
    document.getElementById('new-viewed-date').value;
});

//function for crerating a button to delete elements, it is created when the elements are added to the table
function createRemoveButton(id) {
    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.id = id;
    button.innerHTML = 'Remove';
    button.onclick = () => {
        let removed = document.getElementById(`item-${id}`);
        removed.parentNode.removeChild(removed);
    };
    return button;
};