import { createContext } from "react";
import { useState } from "react";

export const ShopingCartContext = createContext();

export const ShopingCartProvider = ({children}) => {

// Initialize the state for the shopping cart counter with useState, starting at zero.
    const [count, setCount] = useState(0);

    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const OpenProductDetail = () => setIsProductDetailOpen(true);
    
    const CloseProductDetail = () => setIsProductDetailOpen(false);



    return (
    <ShopingCartContext.Provider value={{
        count,
        setCount,
        OpenProductDetail,
        CloseProductDetail,
        IsProductDetailOpen
    }}>
        {children}
    </ShopingCartContext.Provider>
    )

    
}
