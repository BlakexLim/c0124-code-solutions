import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName && !lastName) {
      throw new ClientError(400, 'first and last name required');
    }
    const sql = `
      insert into
        "actors"
        ("firstName",
        "lastName")
        values ($1, $2)
        returning *;
      `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    if (!firstName) throw new ClientError(400, 'first name is required');
    if (!lastName) throw new ClientError(400, 'last name is required');
    const sql = `
      update "actors"
      set "firstName" = $1,
          "lastName" = $2
      where "actorId" = $3
      returning *;
      `;
    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];

    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    res.status(200).json(actor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, 'invalid actorId, must be an integer');
    }
    const sql = `
      delete
      from "actors"
      where "actorId" = $1
      returning *;
      `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const retiredActor = result.rows[0];
    if (!retiredActor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(204).json(actorId);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
