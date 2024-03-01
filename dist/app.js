"use strict";
// type Employee = {
//   name: string;
//   startDate: Date;
// };
var _a;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(2, 5);
const fetchUserData = {
    name: "Max",
    job: { title: "Programmer" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userData = null;
const storedData = userData !== null && userData !== void 0 ? userData : "DEFAULT";
console.log(storedData);
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
