import { useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useEffect } from "react"

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])


    return (
      <Layout>
        <div className='text-center font-bold	' >
            Home
            {
              items?.map(item => (
                <Card key={item.id} data={item} />
              ))
            }
        </div>
      </Layout>

    )
  }
  
  export default Home