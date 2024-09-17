"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
const uuid_1 = require("uuid");
class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(name) {
        const id = (0, uuid_1.v4)();
        if (name) {
            this.orders.push({
                id,
                name,
                status: "Preparing"
            });
        }
        return { id, name, status: "Preparing" };
    }
    updateToPrepared(id) {
        const order = this.orders.find(order => order.id === id);
        if (order) {
            order.status = "Prepared";
            return order;
        }
        const err = {
            id: 'error',
            name: 'error',
            status: 'error'
        };
        return err;
    }
    upadateToRecived(id) {
        const order = this.orders.find(order => order.id === id);
        if (order) {
            if (order.status === 'Prepared') {
                order.status = "Received";
                return order;
            }
            else {
                return {
                    id: 'not Prepared',
                    name: 'not Prepared',
                    status: 'not Prepared'
                };
            }
        }
        const err = {
            id: 'error',
            name: 'error',
            status: 'error'
        };
        return err;
    }
    deteleOrdeAfterRecived(id) {
        const len = this.orders.length;
        this.orders = this.orders.filter(order => order.id !== id);
        if (len > this.orders.length) {
            return true;
        }
        return false;
    }
    getAllOrders() {
        return this.orders;
    }
}
exports.OrderManager = OrderManager;
