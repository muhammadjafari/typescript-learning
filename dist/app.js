"use strict";
const names = ['max', 'john'];
const promise = new Promise((resolve, reject) => {
    resolve("this is a text");
});
promise.then(data => {
    data.split('');
});
