# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  Await is used to indicate that JS runtime should wait until the asynchronous function completes.
  Async is used to return a promise
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and await, code is read sequentially and it is typically easier to follow and understand.
  Whereas .then and .catch callback functions are called asynchronously after work is completed
- When do you use `async`?
  When our code has a potentially long-running task and you need the page to be responsive while that task runs
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When you need to return a promise before the execution of everything else in the async function
- How do you handle errors with `await`?
  With try, catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  try with try to fulfill promises,
  catch will help catch errors if promises are rejected,
  throw will throw an error
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  Then the promise is fulfilled
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

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
