# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To check our code for the expected results
- What is a "model"?
  A representation of all page content as objects that can be modified
- Which "document" is being referred to in the phrase Document Object Model?
  the main entry point to the page
- What is the word "object" referring to in the phrase Document Object Model?
  The whole document represented as an object that can be modified
- What is a DOM Tree?
  A representation of HTML as a tree structure of tags
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementsById(), document.querySelector()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  Querying the DOM takes an eternity, so it's good practice to store the value in a variable to make it reuseable
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to run the HTML document first to create a DOM
- What does `document.querySelector()` take as its argument and what does it return?
  It returns the first element from the document
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It returns NodeList of all elements matching the selector

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
