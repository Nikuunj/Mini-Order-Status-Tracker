import { idText } from "typescript";
import {v4 as uuidv4} from 'uuid';


export interface Order {
    id : string, 
    name : string, 
    status : string
}

export class OrderManager {
    private orders : Order[];
    constructor() {
        this.orders = [];
    }

    addOrder(name: string): Order{
        const id: string = uuidv4();
        if(name) {
            this.orders.push({
                id,
                name,
                status : "Preparing"
            })
        }
        return { id, name, status: "Preparing" }
    }

    updateToPrepared(id: string): Order {
        const order = this.orders.find(order => order.id === id);
        if (order) {
            order.status = "Prepared";
            return order;
        }
        const err : Order = {
            id : 'error',
            name : 'error',
            status : 'error'
        }
        return err;
    }

    upadateToRecived(id: string): Order {
        const order = this.orders.find(order => order.id === id);
        if (order) {
            if(order.status === 'Prepared') {
                order.status = "Received";
                return order
            } else {
                return {
                    id : 'not Prepared',
                    name : 'not Prepared',
                    status : 'not Prepared'
                }
            }
        }
        const err : Order = {
            id : 'error',
            name : 'error',
            status : 'error'
        }
        return err;
    }

    deteleOrdeAfterRecived(id: string): boolean {
        const len: number = this.orders.length;
        this.orders = this.orders.filter(order => order.id !== id);
        if(len > this.orders.length) {
            return true;
        }
        return false;
    }

    getAllOrders(): Order[] {
        return this.orders;
    }
}