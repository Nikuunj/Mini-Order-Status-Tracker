'use client';

import { useState } from 'react';
import axios from 'axios';

const AddOrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/orderAdd', {
        customerName,
        status,
      });
      console.log('Order added:', response.data);
      setCustomerName('');
      setStatus('');
    } catch (error) {
      setError('Failed to add order');
      console.error('Error adding order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <input
          id="status"
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Order
      </button>
    </form>
  );
};

export default AddOrderForm;
