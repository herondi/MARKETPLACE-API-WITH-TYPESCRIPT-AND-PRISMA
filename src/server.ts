import { router } from './router';
import express from 'express';

const app = express();
app.use(express.json())

app.use(router);



app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
