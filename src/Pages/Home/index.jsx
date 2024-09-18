import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShopingCartContext } from "../../Context";

function Home() {
  const Context = useContext(ShopingCartContext);

    return (
      <Layout>
        <div className='text-center font-bold	' >
            Home
            <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              {
                // Mapeo de los productos para renderizar un componente Card por cada uno
                Context.items?.map(item => (
                  <Card key={item.id} data={item} />
                ))
              }
            </section>

        </div>
        <ProductDetail />
      </Layout>

    )
  }
  
  export default Home