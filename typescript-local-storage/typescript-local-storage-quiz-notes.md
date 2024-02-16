# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?
  By using the setItems() method of the storage interface with two parameters, key name and value
- How do you retrieve data from `localStorage`?
  By using the getItem() method of the storage interface with one parameter, key name
- What data type can `localStorage` save in the browser?
  Only strings
- When does the `'beforeunload'` event fire on the `window` object?
  When the current window, contained document, and associated resources are about to be unloaded.
  The main use for this event is to trigger confirmation that asks users to confirm id they really want to close or reload or navigate somewhere else.
  Intended to help prevent loss of unsaved data

## Notes

All student notes should be written here.

<!-- Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window. A suitable place to include functions, objects, constructors to be globally available. -->
<!-- Storage interface provides access to a domain's local storage (session). It allows: the addition, modification, or deletion of stored data items-->
<!-- localStorage property of the window interface allows you to access a storage object for the document"s origin. The stored data is saved across browser sessions -->
<!-- localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends; when the page is closed -->

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
