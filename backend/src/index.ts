import express, { NextFunction, Request , Response } from 'express';
import cors from 'cors';
import { orderRouter } from './routes/orderRoutes';

const app = express();
app.use(express.json());
app.use(cors());

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

app.use('/api', orderRouter)

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});