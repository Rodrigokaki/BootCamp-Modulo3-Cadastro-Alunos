students = [
    {
        id : 1,
        name : 'Pedro Antonio',
        email : 'pedro@abutua.com',
        tel : '(15) 99999-9999',
        course : 2,
        shift : 'Tarde'
    }
];

courses = ['Java', 'Angular', 'React'];

addAllRow(students);

function addAllRow(students){
    for(let student of students){
        addRow(student);
    }
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
    telCell.innerHTML = student.tel;

    courseCell = row.insertCell();
    courseCell.className = 'd-none d-sm-table-cell';
    courseCell.innerHTML = courses[student.course-1];

    shiftCell = row.insertCell();
    shiftCell.className = 'd-none d-sm-table-cell';
    shiftCell.innerHTML = student.shift;
}

function save(){
    idRadio = Array.from(document.getElementsByName("radioShift")).find(r => r.checked).id;
    switch(idRadio) {
        case 'radioMorning':
          inputShift = 'Manhã'
          break;
        case 'radioEvening':
            inputShift = 'Tarde'
          break;
        case 'radioNight':
            inputShift = 'Noite'
        break;
      }

    let newStudent = {
        id : students.length + 1,
        name : document.getElementById("inputName").value,
        email : document.getElementById("inputEmail").value,
        tel : document.getElementById("inputTelephone").value,
        course : document.getElementById("inputCourse").value,
        shift : inputShift

    }

    addRow(newStudent);
    students.push(newStudent);

    document.getElementById("formStudents").reset();
}

//mask
$("#inputTelephone").mask("(99) 99999-9999");