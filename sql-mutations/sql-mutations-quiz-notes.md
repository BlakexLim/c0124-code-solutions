# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create
  Read
  Update
  Delete
- How do you add a row to a SQL table?
  By using `insert into` table name with all of the associated columns in parenthesis, and `values` followed by the values in the same order as the columns listed in parenthesis as well (tuple).
  Text values are wrapped in single quotes.
  Use select \* `from` table_name to add the new row.
- How do you add multiple rows to a SQL table at once?
  By specifying more than one tuple of values separated by commas.
- How do you update rows in a database table?
  By using `update` and `set` and `where` to be specific.
- How do you delete rows from a database table?
  `delete` and `from` a table name.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  `where` will help specify what to delete or update, so all items won't be effected by the delete or update.
- How do you accidentally delete or update all rows in a table?
  By not specifying `where`
- How do you get back the modified row without a separate `select` statement?
  Adding `returning *` at the end
- Why did you get an error when trying to delete certain films?
  Because in relational databases, other tables might rely on other tables and their data for some of their rows or columns.

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
