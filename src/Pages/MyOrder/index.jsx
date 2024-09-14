import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom"


function MyOrder() {
  const { order } = useContext(ShopingCartContext);

  const lastOrder = order?.slice(-1)[0];

    return (
      <Layout>
        <div className="flex justify-between w-80 mb-6">
          <Link to="/my-orders" className="flex relative w-full items-center justify-center ">
            <svg
              className="absolute h-6 w-6 left-0 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <h1 className="flex absolute items-center">My Order</h1>
          </Link>
        </div>

            <div className="flex flex-col w-80">
                {
                  lastOrder?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        cantidad={product.cantidad} 
                    />
                  ))
                }
            </div>
       
      </Layout>
    )
  }
  
  export default MyOrder