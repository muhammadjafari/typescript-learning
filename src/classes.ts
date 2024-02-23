class Department {
  private readonly employees: string[] = [];

  constructor(private name: string) {}

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(name: string) {
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

class ItDepartment extends Department {}

const it = new ItDepartment("ItDepartment");

it.describe();
