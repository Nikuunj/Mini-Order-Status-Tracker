'use client';

import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import AddOrderForm from './AddOrderForm'; // Adjust path as needed

interface Order {
  id: number;
  customerName: string;
  status: string;
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Order ID', accessor: 'id' },
      { Header: 'Customer Name', accessor: 'customerName' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: orders });

  return (
    <div>
      <AddOrderForm />
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 mt-6">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
