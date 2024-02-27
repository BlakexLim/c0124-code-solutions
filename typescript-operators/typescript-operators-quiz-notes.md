# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND operator evaluates from left to right, returning immediately with value of first falsy, if all values are true, the last operand is returned.
  The logical OR operator checks if the value can be converted to true or false and returns true or false respectively.
  They can both be used as conditionals in if statements to compare or get a boolean value.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  If the value on the left side of the operator is false, the right side is not evaluated, and is there instead of throwing an error if it is evaluated.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Returns the right hand side operand when left hand side operand is null or undefined.
  The logical OR returns the right hand side operand if the left operand ANY falsy value.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes three operands, a condition followed by a ? then an expression if condition is true followed by : and expression if condition is false.
  alternatively used as an if...else statement.
- What is the `?.` (optional chaining) operator? When would you use it?
  It accesses and object's property or calls a function.
  Use it when you're trying to find object properties, properties of object properties and so on.
  returns undefined instead of error if property does not exist.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  This syntax allows strings or arrays to be expanded.
  in objects, it numerates the properties and adds the key-value pairs to the object being created.
- What data types can be spread into an array? Into an object?
  Only arrays and strings can be spread in an array literal.
  In objects, all primitives can be spread.
- How does spread syntax differ from rest syntax?
  The spread syntax expands an array into its elements, while rest condenses multiple elements into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
