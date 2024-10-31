const btn_send = document.querySelector('.form-button');
let string = '';

btn_send.addEventListener('click', ()=> {
    const form = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Subject: document.getElementById('subject').value
    };

    if ( form.Name === "" ) {
        return console.log('Campo de nombre vacio');
    }else if (form.Email === "") {
        return console.log('Campo de email vacio')
    } else {
        console.log(form);
    }  
});