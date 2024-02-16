"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const copy = { name: "copy", describe: accounting.describe };
copy.describe();
