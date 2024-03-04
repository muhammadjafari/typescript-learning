// const names : Array<string> = ['max','john']

// const promise: Promise<string> = new Promise((resolve, reject)=> {
//   resolve("this is a text");
// })

// promise.then(data => {
//   data.split('')
// })

function merge<T extends {},U extends {}>(obj1: T,obj2: U){
  return Object.assign(obj1,obj2)
}

const objMerged = merge({name:'Max'},{age:30})
console.log(objMerged.name);

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T): void{
  console.log(element.length);
  
}

countAndDescribe("hello world!");