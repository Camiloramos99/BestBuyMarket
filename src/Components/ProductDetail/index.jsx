import { useContext } from "react";
import { ShopingCartContext } from "../../Context";

const ProductDetail = () => {
    const { IsProductDetailOpen, CloseProductDetail, ProductToShow } = useContext(ShopingCartContext);

    return (
        <aside 
            className={`${IsProductDetailOpen ? "flex" : "hidden"} flex-col bg-white w-[360px] h-[calc(100vh-100px)] top-[100px] fixed right-0 border border-black rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="size-6 cursor-pointer"
                    onClick={() => CloseProductDetail()}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <figure className="px-6">
                <div className="w-full h-52 rounded-lg flex flex-col">
                    <img 
                        className="w-full h-52 object-cover rounded-lg" 
                        src={ProductToShow.image}  
                        alt={ProductToShow.title} 
                    />
                </div>
                    <p className="flex flex-1 flex-col pt-4">
                        <span className="font-medium text-2xl mb-2">${ProductToShow.price}</span>
                        <span className="font-medium text-md">{ProductToShow.title}</span>
                        <span className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem error odit maiores commodi omnis.</span>
                    </p>
            </figure>
        </aside>
    );
}

export default ProductDetail;
