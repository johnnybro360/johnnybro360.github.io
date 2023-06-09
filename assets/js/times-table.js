// Times Table Demo

let dom = document;

const numbers = [...Array(20).keys()];

const dropDownMenu = dom.getElementById('dropdown-menu');

const selectList = document.createElement("select");
selectList.id = "numberSelect";
dropDownMenu.appendChild(selectList);

const selectLabel = document.createElement('label');
selectLabel.setAttribute('for','select');

const defaultOption = document.createElement("option");
defaultOption.text = `- Select a number -`;
selectList.appendChild(defaultOption);

let outputZone = dom.getElementById('outputZone');

for (let i = 0; i < 20; i++){
    const option = dom.createElement('option');
    option.innerHTML = `<option value="${i + 1}">${i + 1}</option>`;
    selectList.appendChild(option);
}

// Create Times Table
function numberEntryChanged(event) {
    event.preventDefault();
    const number = parseInt(selectList.value);
    if (!number) {
        outputZone.innerHTML = `<p class="text text-red-500">Please select a number from 1 to 20.</p>`;
    } else {
        outputZone.innerText = '';
        const table = dom.createElement('table');
        table.className = 'col-start-2 col-span-3'
        numbers.map(item => item + 1).forEach(item => {
            const tableRow = dom.createElement('tr');
            const tableData = dom.createElement('td');
            const div = dom.createElement('div');
            div.innerHTML = `<div class="grid grid-cols-5 text-m text-[#FFD7F3] m-1">
                                <span class="text-center">${item}</span>
                                <span class="text-center">X</span>
                                <span class="text-center">${number}</span>
                                <span class="text-center">=</span>
                                <span class="text-center">${number * item}</span>
                                </div>`;
            div.style.alignmentBaseline = 'auto';
            tableData.appendChild(div);
            tableRow.appendChild(tableData);
            table.appendChild(tableRow);
            tableData.style.border = '1px solid #FFD7F3';
            tableRow.style.border = '1px solid #FFD7F3';
        })
        outputZone.appendChild(table);
    }
}

selectList.addEventListener('change', numberEntryChanged);