"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const OrderManager_1 = require("../manager/OrderManager");
exports.orderRouter = express_1.default.Router();
const orderMnager = new OrderManager_1.OrderManager();
exports.orderRouter.post('/addOrder', (req, res) => {
    const name = req.body.name;
    const ret = orderMnager.addOrder(name);
    res.status(200).json(ret);
});
exports.orderRouter.get('/get-all', (req, res) => {
    const getAll = orderMnager.getAllOrders();
    res.status(200).json(getAll);
});
exports.orderRouter.put('/update-to-prepared', (req, res) => {
    const id = req.body.id;
    try {
        const ret = orderMnager.updateToPrepared(id);
        if (ret.status === "error") {
            throw new Error();
        }
        res.status(200).json(ret);
    }
    catch (err) {
        res.status(500).json({ 'error': "Can't update to prepared" });
    }
});
exports.orderRouter.put('/update-to-recived', (req, res) => {
    const id = req.body.id;
    try {
        const ret = orderMnager.upadateToRecived(id);
        if (ret.status === 'not Prepared') {
            res.status(200).json({ wait: "waing for Prepared order , order is not Prepared" });
        }
        if (ret.status === "error") {
            throw new Error();
        }
        res.status(200).json(ret);
    }
    catch (err) {
        res.status(500).json({ error: "Can't update to recived" });
    }
});
exports.orderRouter.delete('/delete', (req, res) => {
    const id = req.body.id;
    try {
        const ret = orderMnager.deteleOrdeAfterRecived(id);
        if (!ret) {
            throw new Error();
        }
        res.status(200).json({ status: "Order Completed" });
    }
    catch (err) {
        res.status(500).json({ error: "Can't Detele the Order" });
    }
});
