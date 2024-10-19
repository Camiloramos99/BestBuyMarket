import { useContext } from "react";
import { ShopingCartContext } from "../../Context";

const OrderCard = ({ id, title, price, image, cantidad, HandleDelete }) => {
    const { CloseCheckoutSideMenu, CartProducts, setCartProducts } = useContext(ShopingCartContext);

    const updateQuantity = (id, delta) => { 
        setCartProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, cantidad: product.cantidad + delta } : product
            )
        );
    };

    const handleDecrease = () => {
        if(cantidad > 1) {
            updateQuantity(id, -1);
        } else {
            HandleDelete(id);
        }
    };


    let renderIconX;
        if (HandleDelete) {
            renderIconX = (
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-6 cursor-pointer"
                onClick={() => HandleDelete(id)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            )
        }

    let renderAddAndRestButtons;
    if (HandleDelete) {
        renderAddAndRestButtons = (
        <section>
            <button className="inline-flex justify-center items-center text-center border border-[#ac2ebb] opacity-75 
                    border-r-0 rounded-tl-[5px] rounded-bl-[5px] h-[26px] min-w-[26px] p-0 font-inherit"
                    onClick={handleDecrease}>
                    -
            </button>
            <button className="inline-flex justify-center items-center text-center border border-[#ac2ebb] border-l-0 opacity-75 
                    rounded-tr-[5px] rounded-br-[5px] h-[26px] min-w-[26px] p-0 font-inherit"
                    onClick={() => updateQuantity(id, 1)}>
                    +
            </button>
        </section> 
        ) 
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="relative w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt=""/>
                    <p className="absolute top-[-10px] right-[-10px] bg-[#ac2ebb] 
                                  w-[20px] h-[20px] text-white rounded-full 
                                  text-[12px] flex items-center justify-center">
                        {cantidad}
                    </p>
                </figure>
                <div>
                    <p className="text-sm font-light">{title}</p>
                    { renderAddAndRestButtons }
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                { renderIconX }
            </div>
        </div>
    );
};

export default OrderCard;
