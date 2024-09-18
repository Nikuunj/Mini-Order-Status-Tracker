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
        const newOrder: Order = {
            id,
            name,
            status: "Preparing",
        };

        this.orders.push(newOrder);
        console.log('add order');
        
        console.log(this.orders);
        
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
        const order = this.orders.find(order => order.id === id);
        if (!order || order.status !== 'Received') {
            return false;  // You can only delete orders that are received
        }
        const originalLength = this.orders.length;
        this.orders = this.orders.filter(order => order.id !== id);
        return originalLength > this.orders.length;
    }

    getAllOrders(): Order[] {
        console.log("Current orders:", this.orders);
        return this.orders;
    }
}