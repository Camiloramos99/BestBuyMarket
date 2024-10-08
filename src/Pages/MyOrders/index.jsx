import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShopingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShopingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium mb-6">My Orders</h1>
      </div>
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;
