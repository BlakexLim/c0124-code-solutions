# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  SQL is the primary way of interacting with relational databases, a powerful way of retrieving, creating, and manipulating data in a relational database.
  JS is an imperative programming language, meaning you tell it what to do and how to do it.
  Whereas SQL is declarative, meaning programmers describe the results they want and the programming environment gets those results its own way
- How do you retrieve specific columns from a database table?
  Start with the keyword `select` followed by a comma-separated list of column names, followed by `from` specifying which table to retrieve the data. Query must end with a ; semicolon.
  Should by indented for readability and consistent style.
  Mixed case column names should be wrapped in double quotes and escaped with \
- How do you filter rows based on some specific criteria?
  To filter, use the `where` clause after the `from` clause.
- What are the benefits of formatting your SQL?
  Consistency and readability.
- What are four comparison operators that can be used in a `where` clause?
  <, >, !=, =
- How do you limit the number of rows returned in a result set?
  Adding the `limit` clause at the end
- How do you retrieve all columns from a database table?
  By typing an \* asterisk
- How do you control the sort order of a result set?
  Data can be sorted by utilizing the `order by` clause after the `from` clause.

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
