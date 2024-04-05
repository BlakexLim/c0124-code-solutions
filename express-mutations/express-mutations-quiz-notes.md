# express-post-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  The request method will define what the user is trying to accomplish, create, view, update, delete.
- What is the significance of an HTTP response's status?
  Response status gives us extra confirmation for the things we accomplished. Status also helps us figure out what to fix with error codes and messages.
- What does the `express.json()` middleware do and when would you need it?
  `express.json()` parses JSON request bodies if the request `Content-Type` equals to `application/json`

## Notes

All student notes should be written here.

- why do we put it into the body instead of URL?
  Body is encrypted when transferring, whereas in the url, it's available to the world.
  convention
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
