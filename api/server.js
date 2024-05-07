const Koa = require('koa');
const app = new Koa();

// Middleware
// Example: Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

// Routing
// Example: Define a basic route
app.use(async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
