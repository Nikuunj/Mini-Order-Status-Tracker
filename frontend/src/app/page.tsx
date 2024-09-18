import Head from 'next/head';
import OrdersTable from './components/OrdersTable';
import AddOrderForm from './components/AddOrderForm'; // Make sure the path is correct

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Orders List</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Orders List</h1>
      
      {/* OrdersTable component */}
      <OrdersTable />
    </div>
  );
};

export default Home;
