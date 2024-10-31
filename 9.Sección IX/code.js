const btnSend = document.querySelector('.submit');
const dataSend = (data)=> {

    let promedio = (parseInt(data.qualification1)+ parseInt(data.qualification2) + parseInt(data.qualification3)) / 3;
    
    if (promedio >= 7) {
        console.log(`El alumno ${data.name_student}, ha aprobado el año escolar con una puntuacion de: 
        ${Math.floor(promedio)}`)
    } else {
        console.log(`El alumno ${data.name_student}, ha reprobado el año escolar con una puntuacion de: 
        ${Math.floor(promedio)}`)
    }
    return data;
}

btnSend.addEventListener('click', ()=> {
    try {
        const form = document.querySelectorAll(".fields");
        const data = {
          name_student: form[0].value,
          last_name: form[1].value,
          subject1: form[2].value,
          qualification1: form[3].value,
          subject2: form[4].value,
          qualification2: form[5].value,
          subject3: form[6].value,
          qualification3: form[7].value,
          name_teacher: form[8].value,
        };
      
        dataSend(data);
        
      } catch (e) {
          console.log(e);
      }
});



