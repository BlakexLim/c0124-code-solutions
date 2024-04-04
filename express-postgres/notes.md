** notes **

- Template strings lets you break SQL onto separate lines and indent it for readability

- you can assign an SQL statement to a variable and execute it

- db.query is async, so it must `await`

  - the resolved value is a `pg.Result` object
  - in this object, an array of the rows are returned from the query
  - to return one row, use `const row = result.rows[0]`
  - or use destructuring `(const [row] = result.rows)`
  - each element of the rows array will be an object whose `keys` are the `column names` and `values` are the `column values`

- once rows are returned, they are sent as response with `res.send()`

  - since we are using await, try/ catch is mandatory
  - always return a response to client, even if its an error

- NEVER USE STRING CONCATENATION when passing parameters to your queries
  - this will open you up to sql injection attacks
  - SQL supports `parameterized queries`
  - insert `$N` (N is an integer $1, $2) where you want to insert values
