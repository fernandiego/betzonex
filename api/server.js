const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { Pool } = require('pg');
const cors = require('koa-cors'); // Import koa2-cors middleware
const app = new Koa();
const router = new Router();
const PORT = 3000;

// Database configuration

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'bolao',
  password: 'postgres', // Change this to your actual PostgreSQL password for user 'postgres'
  port: 5432,
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});


// Middleware to parse JSON bodies
app.use(bodyParser());

// CORS middleware configuration
app.use(
  cors({
    origin: '*', // Adjust this based on your frontend's origin
    credentials: true,
  })
);

// Login route
router.post('/login', async (ctx) => {
  const { cpf, password } = ctx.request.body;

  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE cpf = $1 AND password = $2', [cpf, password]);

    if (result.rows.length === 0) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid CPF or password' };
      return;
    }

    const user = result.rows[0];
    ctx.body = { message: 'Login successful', user };
  } catch (err) {
    console.error('Error executing query', err);
    ctx.status = 500;
    ctx.body = { message: 'Internal server error' };
  }
});

// Apply routes
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
