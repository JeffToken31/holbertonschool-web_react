interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "James",
    lastName: "Bond",
    age: 7,
    location: "London",
};

const student2: Student = {
  firstName: 'Justin',
  lastName: 'Bridou',
  age: 83,
  location: 'Auch',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = table.createTHead();
const trHeader = header.insertRow();

const thName = document.createElement('th');
thName.textContent = 'First Name';
const thLocation = document.createElement('th');
thName.textContent = 'Location';
trHeader.appendChild(thName);
trHeader.appendChild(thLocation);

const body = table.createTBody();

for (const student of studentsList) {
    const trBody = body.insertRow()
    const cellFirstName = trBody.insertCell();
    cellFirstName.textContent = student.firstName;
    const cellLocation = trBody.insertCell();
    cellLocation.textContent = student.location;
}
