import express, { type Request, type Response } from 'express';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 6061;

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Hello from rchat server!',
  });
});

app.listen(+port, host, () =>
  console.log(`Server listening on http://${host}:${port}`)
);
