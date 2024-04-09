# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  To pass data deeply into the tree.
- What values can be stored in context?
  Any value you want to pass to a component.
- How do you create context and make it available to the components?
  Create a context with `createContext` and give it a default value.
  Then to make it available to the components, wrap their jsx in a context provider.
- How do you access the context values?
  Use the context with `useContext` hook and pass it a variable you created just before it.
- When would you use context? (in addition to the best answer: "rarely")
  To change the theme (light/ dark mode).
  Logging in.

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
