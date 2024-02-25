type Employee = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Admin | Employee;

function printEmployeeInfo(emp: unknownEmployee) {
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

class Car {
  drive() {
    console.log("driving ...");
  }
}

class Truck {
  drive() {
    console.log("driving ...");
  }

  loadCargo() {
    console.log("loading ...");
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}
