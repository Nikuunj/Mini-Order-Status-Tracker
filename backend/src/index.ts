import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Endpoint to get orders with optional filtering and pagination
app.get('/orders', async (req: Request, res: Response) => {
  const { status, page = 1, pageSize = 10 } = req.query;
  const orders = await prisma.order.findMany({
    where: status ? { status: String(status) } : undefined,
    skip: (Number(page) - 1) * Number(pageSize),
    take: Number(pageSize),
  });
  res.json(orders);
});

// Endpoint to add a new order
app.post('/orderAdd', async (req: Request, res: Response) => {
  const { customerName, status } = req.body;
  console.log('1');
  
  
  if (!customerName || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  console.log('2');
  
  try {
    const newOrder = await prisma.order.create({
      data: {
        customerName,
        status,
      },
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
