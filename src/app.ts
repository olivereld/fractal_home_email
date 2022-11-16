import dotenv from 'dotenv';
import Server from './server';
dotenv.config();

const server = new Server();
console.log('try to init')
server.middlewares();
server.routes();
server.listen();