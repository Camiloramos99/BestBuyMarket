import { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { ShopingCartContext } from "../../Context";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
    const { IsProductDetailOpen, CloseProductDetail, ProductToShow, OpenCheckoutSideMenu, CloseCheckoutSideMenu,
            IsCheckoutSideMenuOpen, CartProducts, setCartProducts, setOrder, order, signOut
          } = useContext(ShopingCartContext);
    
    const navigate = useNavigate();

    const HandleDelete = (id) => {
        const filteredproducts = CartProducts.filter((product) => product.id !== id);
        setCartProducts(filteredproducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "07.09.2024",
            products: CartProducts,
            totalProducts: CartProducts.length,
            totalPrice: totalPrice(CartProducts)
        }
        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        CloseCheckoutSideMenu();
        
        if (signOut) {
            navigate('/sign-in');
        } else {
            navigate('/my-orders/last');
        } 
    }

    return (
        <aside 
            className={`${IsCheckoutSideMenuOpen ? "flex" : "hidden"} flex-col bg-white w-[360px] h-[calc(100vh-68px)] top-[68px] fixed right-0 border border-black rounded-lg overflow-auto overscroll-auto`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="x-icon size-6 cursor-pointer"
                    onClick={() => CloseCheckoutSideMenu()}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="flex-1 px-6">
                {CartProducts.map(product => (
                    <OrderCard 
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                        id={product.id}
                        cantidad={product.cantidad} 
                        HandleDelete={HandleDelete}
                    />
                ))}
            </div>
            <div className="px-6 py-5">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light ">Total:</span>
                    <span className="font-medium ">${totalPrice(CartProducts)}</span>
                </p>
                    <button 
                        className="place-self-center w-full h-10 rounded-lg bg-purple-500 text-white font-bold"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;

