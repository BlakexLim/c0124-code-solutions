# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  A type of function that allows components to have access to state and other React features
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with `use` followed by an uppercase letter.
  Hooks can only be called by React components and other hooks.
  Hooks must be at the top level of a component and in the same order.
- What is the purpose of state in React?
  To tell React what data controls the output of a component and needs to be saved between re-renders.
- Why can't we just maintain state in a local variable?
  Local variables don't persist between re-renders
- What two actions happen when you call a `state setter` function?
  Current state value is updated and component re-renders the next state value
- When does the local `state variable` get updated with the new value?
  Before state change.
  Changes are shown on page after re-rendering.

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
