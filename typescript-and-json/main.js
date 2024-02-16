'use strict';
const newArr = [
  {
    isbn: '',
    title: '',
    author: '',
  },
  {
    isbn: '',
    title: '',
    author: '',
  },
  {
    isbn: '',
    title: '',
    author: '',
  },
];
console.log(typeof newArr);
JSON.stringify({ newArr });
console.log(typeof JSON.stringify({ newArr }));
const newArrJSON = '{"id": "number", "name": "string"}';
console.log(typeof newArrJSON);
console.log(typeof JSON.parse(newArrJSON));
