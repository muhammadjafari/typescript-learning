// const names : Array<string> = ['max','john']

// const promise: Promise<string> = new Promise((resolve, reject)=> {
//   resolve("this is a text");
// })

// promise.then(data => {
//   data.split('')
// })

function merge<T extends {}, U extends {}>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const objMerged = merge({ name: "Max" }, { age: 30 });
console.log(objMerged.name);

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T): void {
  console.log(element.length);
}

countAndDescribe("hello world!");

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log(obj[key]);
}

class storageData<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
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
