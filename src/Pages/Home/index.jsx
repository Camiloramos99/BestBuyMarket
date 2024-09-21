import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShopingCartContext } from "../../Context";

function Home() {
  const { searchQuery , setSearchQuery, filteredItems, items } = useContext(ShopingCartContext);

const renderView = () => {
  if (searchQuery?.length > 0) {
      if (filteredItems?.length > 0) {
          return (
              filteredItems.map(item => (
                  <Card key={item.id} data={item} />
              ))
          );
      } else {
          return (
              <div>We couldn’t find any matching products.</div>
          );
      }
  } else {
      return (
          items?.map(item => (
              <Card key={item.id} data={item} />
          ))
      );
  }
};

const handleInputChange = (event) => {
  const value = event.target.value;
  setSearchQuery(value);
};
  
    return (
      <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium mb-6">Exclusive Products</h1>
      </div>
      <input 
          type="text"  
          placeholder="Search a product" 
          className="w-80 rounded-lg border border-black p-4 mb-4 " 
          onChange={handleInputChange}
        />

      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { renderView() }
      </section>
        <ProductDetail />
      </Layout>

    )
  }
  
  export default Home