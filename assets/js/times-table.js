let dom = document;

const numbers = [...Array(20).keys()];

const selectOptions = dom.getElementById('selectDropdown');

const numberEntry = dom.getElementById('selectDropdown');

let outputZone = dom.getElementById('outputZone');

numbers.forEach((item) => {
    let option = dom.createElement('option');

    option.innerHTML = `<option value="${item + 1}">${item + 1}</option>`;

    selectOptions.appendChild(option);
})

function numberEntryChanged(event) {
    event.preventDefault();

    const number = parseInt(numberEntry.value)

    if (!number) {
        outputZone.innerHTML = `<p class="text text-red-500">Please select a number from 1 to 20.</p>`;

    } else {
        outputZone.innerText = '';

        numbers.map(item => item + 1).forEach(item => {
            let p = dom.createElement('p');
            p.innerHTML = `<p class="text-l text-[#FFD7F3]">${item} x ${number} = ${number * item}</p>`;
            outputZone.appendChild(p)
        })
    }
}

numberEntry.addEventListener('change', numberEntryChanged);