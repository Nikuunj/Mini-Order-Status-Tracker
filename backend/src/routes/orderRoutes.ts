import express, { Request, Response } from 'express';
import { OrderManager, Order } from '../manager/OrderManager';


export const orderRouter = express.Router();
const orderMnager = new OrderManager();

orderRouter.post('/addOrder', (req: Request, res: Response ) => {
    const { name } = req.body;
    console.log('add');
    
    const ret: Order = orderMnager.addOrder(name);
    console.log("order added")

    res.status(200).json(ret);
})

orderRouter.get('/get-all', (req: Request, res: Response) => {
    const getAll: Order[] = orderMnager.getAllOrders();
    console.log('send all order');
    console.log(getAll);
    res.status(200).json(getAll);
})

orderRouter.put('/update-to-prepared',  (req: Request, res: Response) => {
    const id: string = req.body.id;
    try {
        const ret: Order = orderMnager.updateToPrepared(id);
        if(ret.status === "error") {
            throw new Error();
        }
        res.status(200).json(ret);
    } catch(err) {
        res.status(500).json({ 'error': "Can't update to prepared"})
    }
})

orderRouter.put('/update-to-recived',  (req: Request, res: Response) => {
    const id: string = req.body.id;
    try {
        const ret: Order = orderMnager.upadateToRecived(id);
        if(ret.status === 'not Prepared') {
            res.status(200).json({ wait : "waing for Prepared order , order is not Prepared"})
        }
        if(ret.status === "error") {
            throw new Error();
        }
        res.status(200).json(ret);
    } catch(err) {
        res.status(500).json({ error : "Can't update to recived"})
    }
})

orderRouter.delete('/delete',  (req: Request, res: Response) => {
    const id: string = req.body.id;
    try {
        const ret: boolean =  orderMnager.deteleOrdeAfterRecived(id);
        if(!ret) {
            throw new Error();
        }
        res.status(200).json({ status : "Order Completed"})
    } catch(err) {
        res.status(500).json({ error : "Can't Detele the Order"})
    }
})