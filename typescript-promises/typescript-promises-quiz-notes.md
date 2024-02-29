# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  When promise is created, synchronous execution of the calling code continues till end of code,
  when current function is completed, the Event loop runs,
  the promise task is taken from Event Queue and executed,
  after promise completes, promise calls the then handler,
  if promise completes with an error then calls the catch handler,
  then promise calls the finally handler
- What are the three states a Promise can be in?
  Pending, fulfilled, rejected
- How do you handle the fulfillment of a Promise?
  With a .then method
- How do you handle the rejection of a Promise?
  With a .catch method, or a second callback on a .then

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
