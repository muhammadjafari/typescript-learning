"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
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
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
// const element = <HTMLInputElement>document.getElementById("input")!;
const element = document.getElementById("input");
if (element) {
    element.value = "hello";
}
