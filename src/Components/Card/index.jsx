import { useContext } from "react";
import { ShopingCartContext } from "../../Context";

const Card = ({ data: { title, price, category, image } }) => {

    // Extract count and setCount from ShopingCartContext using useContext.
    const { count, setCount, OpenProductDetail } = useContext(ShopingCartContext)

    return (
        <article className="bg-white cursor-pointer h-60 w-56 rounded-lg"
        onClick={() => OpenProductDetail()}
        >
            <figure className="relative mb-2 w-full h-4/5">
            <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {category}
            </figcaption>
            <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        
            <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={() => setCount(count + 1)}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium" >{price}</span>
            </p>


        </article>

    )
}


export default Card