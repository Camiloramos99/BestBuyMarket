import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
    const { IsProductDetailOpen, CloseProductDetail, ProductToShow, OpenCheckoutSideMenu, CloseCheckoutSideMenu, IsCheckoutSideMenuOpen, CartProducts } = useContext(ShopingCartContext);

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
            <div className="px-6">
                {CartProducts.map(product => (
                    <OrderCard 
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                        cantidad={product.cantidad} 
                    />
                ))}
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;

