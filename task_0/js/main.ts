interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "Alice",
    lastName: "Dupont",
    age: 25,
    location: "Paris",
};

const student2: Student = {
    firstName: "Cynthia",
    lastName: "Lariccia",
    age: 30,
    location: "Bordeaux",
};

const studentsList = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
})