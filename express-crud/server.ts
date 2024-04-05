import express from 'express';
import { ClientError, errorMiddleware } from './lib';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from grades;
      `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `${gradeId} is not a valid number`);
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1;
        `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade)
      throw new ClientError(404, `student with id ${gradeId} does not exist`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateParams(name, course, score);
    const sql = `
    insert into "grades"("name", "course", "score")
      values ($1, $2, $3)
      returning *;
      `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const [newStudent] = result.rows;
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `${gradeId} is not a valid number`);
    }
    validateParams(name, course, score);
    const sql = `
      update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *;
      `;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const [updatedGrade] = result.rows;
    if (!updatedGrade)
      throw new ClientError(404, `student with the id ${gradeId} not found`);
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `${gradeId} is not a valid number`);
    }
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
      `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade)
      throw new ClientError(404, `student with the id ${gradeId} not found`);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('port 8080 activated');
});

function validateParams(name: string, course: string, score: number): void {
  if (!name) throw new ClientError(400, 'name is required');
  if (!course) throw new ClientError(400, 'course is required');
  if (!score) throw new ClientError(400, 'score is required');
  if (!Number.isInteger(+score)) {
    throw new ClientError(400, `${score} is not a valid grade`);
  }
  if (score < 0 || score > 100) {
    throw new ClientError(400, `${score} is not a valid grade`);
  }
}
