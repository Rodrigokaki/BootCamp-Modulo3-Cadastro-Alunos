students = [];

courses = ['Java', 'Angular', 'React'];

loadStudents();

function loadStudents(){
    $.getJSON("http://localhost:8080/students", (response) =>{
        students = response;
        for(let student of students){
            addRow(student);
        }
    })
}

function addRow(student){
    let table = document.getElementById("studentsTable");
    let row = table.insertRow();

    row.insertCell().innerHTML = student.id;
    row.insertCell().innerHTML = student.name;

    emailCell = row.insertCell();
    emailCell.className = 'd-none d-md-table-cell';
    emailCell.innerHTML = student.email;

    telCell = row.insertCell();
    telCell.className = 'd-none d-md-table-cell';
    telCell.innerHTML = student.phone;

    courseCell = row.insertCell();
    courseCell.className = 'd-none d-sm-table-cell';
    courseCell.innerHTML = courses[student.idCurso-1];

    periodCell = row.insertCell();
    periodCell.className = 'd-none d-sm-table-cell';
    periodCell.innerHTML = student.period;
}

function save(){
    idRadio = Array.from(document.getElementsByName("radioperiod")).find(r => r.checked).id;
    switch(idRadio) {
        case 'radioMorning':
          inputperiod = 'Manhã'
          break;
        case 'radioEvening':
            inputperiod = 'Tarde'
          break;
        case 'radioNight':
            inputperiod = 'Noite'
        break;
      }

    let newStudent = {
        id : students.length + 1,
        name : document.getElementById("inputName").value,
        email : document.getElementById("inputEmail").value,
        tel : document.getElementById("inputTelephone").value,
        course : document.getElementById("inputCourse").value,
        period : inputperiod

    }

    addRow(newStudent);
    students.push(newStudent);

    document.getElementById("formStudents").reset();
}

//mask
$("#inputTelephone").mask("(99) 99999-9999");