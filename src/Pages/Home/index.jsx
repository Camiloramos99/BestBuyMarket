import { useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useEffect } from "react"
import { data } from "autoprefixer"

function Home() {

  // Estado para almacenar los productos
  const [items, setItems] = useState(null)

  // useEffect para obtener los productos de la API al montar el componente
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => setItems(data))

    

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
      </Layout>

    )
  }
  
  export default Home