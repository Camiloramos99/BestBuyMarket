import { useContext } from "react";
import { ShopingCartContext } from "../../Context";


const OrderCard = ({ title, price, image }) => {
    const { CloseCheckoutSideMenu } = useContext(ShopingCartContext);

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2" >
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt="" />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2" >
                <p className="text-lg font-medium" >{price}</p>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="size-6 cursor-pointer"
                    onClick={() => CloseCheckoutSideMenu()}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
          

    );
}



export default OrderCard;