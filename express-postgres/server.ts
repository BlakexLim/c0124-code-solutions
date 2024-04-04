import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();
// for future use, NUMERIC returns a non-integer(string) data type to JS, if you want PostgreSQL to return a number, add this line before pg.Pool()
// pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "filmId",
        "title"
      from "films"
      where "filmId" = $1;
      `;
    const params = [filmId as string];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { title, filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(404, 'filmId is required');
    }
    const sql = `
      update "films"
      set "title" = $1
      where "filmId" = $2
      returning *;
        `;
    const params = [title as string, filmId as string];
    const result = await db.query(sql, params);
    const [film] = result.rows;
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(`film title successfully updated to ${title}`);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
