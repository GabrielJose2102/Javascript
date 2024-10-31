const btn = document.querySelector('.form-button');
const btnSend = document.querySelector('.btn-send')
const table = document.querySelector('.grid-table');

let cont = 1;

btn.addEventListener('click', ()=> {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;

    const datas = [name, email, subject];
    
    const fragment = document.createDocumentFragment();
    
    for (const data of datas) {
        const cell = document.createElement('DIV');
        cell.classList.add('cell');
        cell.classList.add('data' + cont);
        cell.textContent = data;
        fragment.appendChild(cell);
    }

    const weekSelect = document.createElement('SELECT');
    weekSelect.classList.add('data' + cont);
    const selectFragment = document.createDocumentFragment();

        for (let i = 0; i < 4; i++) {
            const weekOption = document.createElement('OPTION');
            weekOption.value = `Week ${i+1}`;
            weekOption.textContent = `Week ${i+1}`;
            selectFragment.appendChild(weekOption);
        }
        weekSelect.appendChild(selectFragment);

        const cell = document.createElement('DIV');
        cell.classList.add('cell');
        cell.appendChild(weekSelect);

        fragment.appendChild(cell);
        table.appendChild(fragment);

        cont++
});

btnSend.addEventListener('click', ()=> {
    const fields = document.querySelectorAll('SELECT');
    let list = [];

    for (let i = 0; i < fields.length; i++) {
        const student = document.querySelectorAll(`.data${i+1}`);

        const datas = {
        name: student[0].innerHTML,
        Email: student[1].innerHTML,
        Subjet: student[2].innerHTML,
        Week: student[3].value
    };
    list.push(datas);
    }

    console.log(list);
});