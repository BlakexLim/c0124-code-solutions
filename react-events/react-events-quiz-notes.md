# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  The equivalent of an event handler in JS.
- What is an "event handler"? Which component declares the handler?
  The event handler is a prop of a component and and event is handled by the event calling a function.
- How do you pass an event handler to a React component?
  Assigning an event listener prop in the component and passing it the event handler function.
- What is the naming convention for event handlers?
  Starting with `handle` followed by a capital letter.
- What is an "event handler prop"? Which component declares the prop?
  Props such as `onClick`, `onDoubleClick`, `onKeyDown`, `onKeyUp` are event handler props.
  The appropriate component will declare the prop.
- What are some custom event handler props a component may wish to define?
  `onImageClick`, `onTextClick`, `onButtonClick`. A name relating to the component.
- What is the naming convention for custom event handler props?
  Starting with `on` and followed by a capital letter. Word should match component to avoid confusion.

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
