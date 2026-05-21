interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacher {
    (firstName: string, lastName: string): string;
}

const printTeacherFunction: printTeacher = (firstName, lastName) => `${firstName[0]}. ${lastName}`;




interface StudentClassConstructor{
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)){
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}
