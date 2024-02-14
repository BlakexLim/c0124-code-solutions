# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To check if our code works as intended
- What is the purpose of events and event handling?
  Events are to take the user's input and use the event handler to give an output in response
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener()
- What is a callback function?
  A function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  The event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target applies the result of the function to the element that was interacted with to fire the event
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the first line of code, handleClick function is not being called, whereas in the second line of code, handleClick() is being called and the result is added to eventListener

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
