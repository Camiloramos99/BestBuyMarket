import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShopingCartContext);

  const lastOrder = order?.slice(-1)[0];

    return (
      <Layout>
            MyOrder
            <div className="flex flex-col w-80">
                {
                  lastOrder?.products.map(product => (
                    <OrderCard 
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