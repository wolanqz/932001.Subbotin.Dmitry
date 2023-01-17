const rowContainer = document.getElementById('rowContainer');

rowAdd();

function rowAdd() {
    const newRow = document.createElement('tr');
    newRow.className = 'row';
    newRow.innerHTML = `
        <td><input type="text" name="name" id="name" autocomplete="off"></td>
        <td><input type="number" name="number" id="number" autocomplete="off"></td>
        <td><button class="controls" onclick="rowUp(this)">&#8593;</button></td>
        <td><button class="controls" onclick="rowDown(this)">&#8595;</button></td>
        <td><button class="controls" onclick="rowDelete(this)">x</button></td>
    `;
    rowContainer.appendChild(newRow);
};

function save() {
    result = {};
    const rows = rowContainer.querySelectorAll(".row");
    rows.forEach((row) => {
        result[row.querySelector('#name').value] = row.querySelector('#number').value;
    })
    document.querySelector('#result').innerText = JSON.stringify(result);
};

function rowUp(element) {
    previousRow = element.parentElement.parentElement.previousElementSibling;
    if (previousRow) {
        element.parentElement.parentElement.after(previousRow);
    }
};

function rowDown(element) {
    nextRow = element.parentElement.parentElement.nextElementSibling;
    if (nextRow) {
        element.parentElement.parentElement.before(nextRow);
    }
};

function rowDelete(element) {
    let row = element.parentElement.parentElement;
    row.remove();
}