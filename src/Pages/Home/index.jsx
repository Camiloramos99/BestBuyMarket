import { useContext, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { useParams } from "react-router-dom";
import { ShopingCartContext } from "../../Context";

function Home() {
  const { category } = useParams();
  const { searchQuery , setSearchQuery, filteredItems, setSelectedCategory } = useContext(ShopingCartContext);

  // Update selected category when 'category' changes
  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category, setSelectedCategory]);
  
const renderView = () => {
  if (filteredItems?.length > 0) {
    return filteredItems.map(item => (
      <Card key={item.id} data={item} />
    ));
  } else {
    return (
      <div>We couldn’t find any matching products.</div>
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
          value={searchQuery}
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