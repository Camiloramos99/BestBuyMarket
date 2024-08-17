import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { fetchProducts } from "../../api"
import ProductDetail from "../../Components/ProductDetail"
function Home() {

  // Estado para almacenar los productos
  const [items, setItems] = useState([])

  // useEffect para obtener los productos de la API al montar el componente   
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Llama a la función asíncrona y espera a que se resuelva
        setItems(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error("Error fetching products:", error); // Manejo de errores
      }
    };
  
    getProducts();
  }, [])


    return (
      <Layout>
        <div className='text-center font-bold	' >
            Home
            <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              {
                // Mapeo de los productos para renderizar un componente Card por cada uno
                items?.map(item => (
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