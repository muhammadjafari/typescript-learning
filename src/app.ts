class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

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
