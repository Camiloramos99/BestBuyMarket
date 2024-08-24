import { createContext } from "react";
import { useState } from "react";

export const ShopingCartContext = createContext();

export const ShopingCartProvider = ({children}) => {

// Initialize the state for the shopping cart counter with useState, starting at zero.
    const [count, setCount] = useState(0);

// Initialize the state to know if productDetail is open or not    
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const OpenProductDetail = () => setIsProductDetailOpen(true);
    
    const CloseProductDetail = () => setIsProductDetailOpen(false);

// State to show product on productDetail
    const [ProductToShow, setProductToShow] = useState({});


    return (
    <ShopingCartContext.Provider value={{
        count,
        setCount,
        OpenProductDetail,
        CloseProductDetail,
        IsProductDetailOpen,
        ProductToShow,
        setProductToShow
    }}>
        {children}
    </ShopingCartContext.Provider>
    )

    
}
