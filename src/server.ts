import express from "express";
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);


// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Listas, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informaçao

// Query Params: http://localhost:3333/users?search=rodrigo
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)



app.listen(3333);

// Driver nativo, Query builder, ORM
// Driver nativo, Query builder, ORM

// users
// User

// 3 users

// User User User
