import express from 'express';
import cors from 'cors';
import config from './config/config';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})
