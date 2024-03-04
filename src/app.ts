const names : Array<string> = ['max','john']

const promise: Promise<string> = new Promise((resolve, reject)=> {
  resolve("this is a text");
})

promise.then(data => {
  data.split('')
})