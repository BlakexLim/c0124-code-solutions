'use strict';
const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
// console.log('book2 author', bookshelf[1].author);
const secondBook = bookshelf[1].title;
const book2Author = bookshelf[1].author;
console.log(
  `${book2Author} wrote a really informative book about JSON syntax called ${secondBook}.`
);
const firstBookISBN = bookshelf[0].isbn;
const firstBookTitle = bookshelf[0].title;
console.log(
  `If you are having trouble looking for ${firstBookTitle}, then you can look it up using the ISBN ${firstBookISBN}.`
);
console.log(
  `if you're looking for more information on how to build APIs then ${bookshelf[2].title} is a good read.`
);
