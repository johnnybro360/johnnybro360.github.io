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

numbers.forEach((item) => {
    let option = dom.createElement('option');

    option.innerHTML = `<option value="${item + 1}">${item + 1}</option>`;

    selectList.appendChild(option);
})

function numberEntryChanged(event) {
    event.preventDefault();

    const number = parseInt(selectList.value);

    if (!number) {
        outputZone.innerHTML = `<p class="text text-red-500">Please select a number from 1 to 20.</p>`;

    } else {
        outputZone.innerText = '';

        numbers.map(item => item + 1).forEach(item => {
            let p = dom.createElement('p');
            p.innerHTML = `<p class="text-l text-[#FFD7F3]">${item} x ${number} = ${number * item}</p>`;
            outputZone.appendChild(p);
        })
    }
}

selectList.addEventListener('change', numberEntryChanged);