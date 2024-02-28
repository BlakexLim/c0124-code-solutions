# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    Executes a provided function once for each array element.
  - What should the callback function do?
    Execute for each element in the array. Always returns undefined.
  - What is `Array.forEach` useful for?
    Execute side effects at the end of a chain.
- `Array.map`:
  - What does `Array.map` do?
    Creates a new array populated with the results of calling a function on every element in the array.
  - What should the callback function return?
    A new array with each element being the result of the callback function
  - What is `Array.map` useful for?
    For creating a new array with the results of a callback function
- `Array.find`:
  - What does `Array.find` do?
    Calls a callback function once for each element in an array until a truthy value is found and stops iterating through the array
  - What should the callback function return?
    First element in the array that satisfies the testing function, or else undefined is returned
  - What is `Array.find` useful for?
    Finding an object in an array by one of its properties
- `Array.filter`:
  - What does `Array.filter` do?
    Constructs a new array with all of the values that passed as truthy in the callback function
  - What should the callback function return?
    Creates a shallow copy of a portion of an array, filtered to just the elements that passed the test in the callback function.
    Empty array is returned if no elements pass.
  - What is `Array.filter` useful for?
    Filtering arrays

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
