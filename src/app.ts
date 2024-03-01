// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Max",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(2, 5);

// type unknownEmployee = Admin | Employee;

// function printEmployeeInfo(emp: unknownEmployee) {
//   if ("startDate" in emp) {
//     console.log(emp.startDate);
//   }
// }

// class Car {
//   drive() {
//     console.log("driving ...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("driving ...");
//   }

//   loadCargo() {
//     console.log("loading ...");
//   }
// }

// type Vehicle = Car | Truck;

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo();
//   }
// }

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log(speed);
// }

// // const element = <HTMLInputElement>document.getElementById("input")!;
// const element = document.getElementById("input") as HTMLInputElement;

// if (element) {
//   (element as HTMLInputElement).value = "hello";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   name: "Max",
//   job: "Programmer",
// };
