"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Max");
accounting.printEmployeeInformation();
// accounting.employees[1] = "alex";
accounting.printEmployeeInformation();
class ItDepartment extends Department {
}
const it = new ItDepartment("ItDepartment");
it.describe();
