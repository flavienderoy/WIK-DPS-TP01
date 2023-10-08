import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PING_LISTEN_PORT || 5000;

app.get('/ping', (req: Request, res: Response) => {
  const headers = req.headers;
  res.json({ headers });
});

app.all('*', (req: Request, res: Response) => {
    res.status(404).send( '404 NOT FOUND' );
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});