import { useContext, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { useParams } from "react-router-dom";
import { ShopingCartContext } from "../../Context";

function Home() {
  const { category } = useParams();
  const { searchQuery , filteredItems, setSelectedCategory } = useContext(ShopingCartContext);

  // Update selected category when 'category' changes
  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category, setSelectedCategory]);
  
const renderView = () => {
  if (filteredItems?.length > 0) {
    return filteredItems.map((item , index) => (
      <Card key={item.id} data={item} index={index} />
    ));
  } else {
    return (
      <div>We couldn’t find any matching products.</div>
    );
  }
};
  
    return (
      <Layout>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-12">
        { renderView() }
      </section>
        <ProductDetail />
      </Layout>

    )
  }
  
  export default Home