"use strict";
// const names : Array<string> = ['max','john']
// const promise: Promise<string> = new Promise((resolve, reject)=> {
//   resolve("this is a text");
// })
// promise.then(data => {
//   data.split('')
// })
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const objMerged = merge({ name: "Max" }, { age: 30 });
console.log(objMerged.name);
function countAndDescribe(element) {
    console.log(element.length);
}
countAndDescribe("hello world!");
function extractAndConvert(obj, key) {
    console.log(obj[key]);
}
class storageData {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        console.log([...this.data]);
    }
}
const textStorage = new storageData();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
textStorage.getItems();
