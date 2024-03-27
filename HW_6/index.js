import express from 'express';
import UserController from './controllers/UserController.js';
import UrlController from './controllers/UrlController.js';
import CodeController from './controllers/CodeController.js';

const app = express();

app.use(express.json());

app.use('/users', new UserController());
app.use('/url', new UrlController());
app.use('/code', new CodeController());

app.listen(3000, () => {
    console.log('Server is running  http://localhost:3000');
});
