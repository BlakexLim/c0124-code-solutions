# express-postgres-quiz-notes

## Quiz Questions

- What is the purpose of the pg NPM package?
  To allow us to connect postgresql to an api.

- How do you tell pg which database to connect to?
  By using `Pool()`
- How do you send SQL to PostgreSQL from your Express server?
  Utilizing `GET` and other crud methods followed by a query of the database which is `asynchronous`.
- How do you get the rows return from the SQL query?
  With the `.query()` method which returns an object that contains an array of rows returned from the query.
- What must you always remember to put around your asynchronous route handlers? Why?
  Always use try/ catch with async/ await. Let the user know there is an error if there was one.
- What is a SQL Injection Attack and how do you avoid it in pg?
  SQL Injection Attacks are when devious people insert queries against your database in an attempt to get back information like username, passwords, credit card info. To avoid this, don't use string interpolation in queries, utilize `parameterized queries $N ($1, $2)`.

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
