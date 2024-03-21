# react-validated-input-notes

## Notes

All student notes should be written here.

- create a component called ValidatedInput
- JSX can have a `div` wrapper, a nested `input` with a `label`, and a div for a message
- in this component user will be able to input a password
  - if the input is empty, show "A password is required"
  - if the input is more than 0 but less than 8, show "Your password is too short"
  - if input is more than 8, show no message

* Always give a name to every `input`, it will be used as a key in the form data
* Controlling an input with a state variable enables React to force the input to always have the value we pass.
* renders UI on every edit
* if we pass value without `onChange` it will be impossible to type into the input

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
