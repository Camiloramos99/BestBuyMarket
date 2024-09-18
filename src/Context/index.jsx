import { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api"


export const ShopingCartContext = createContext();

export const ShopingCartProvider = ({ children }) => {
    // Initialize the state for the shopping cart counter with useState, starting at zero.
    const [count, setCount] = useState(0);

    // Initialize the state to know if productDetail is open or not    
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const OpenProductDetail = () => setIsProductDetailOpen(true);
    const CloseProductDetail = () => setIsProductDetailOpen(false);

    // Initialize the state to know if CheckoutSideMenu is open or not    
    const [IsCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // State to show product on productDetail
    const [ProductToShow, setProductToShow] = useState({});

    // State to save products as CartProducts
    const [CartProducts, setCartProducts] = useState([]);

    // State to ShoppingCart order
    const [order, setOrder] = useState([]);

    // State to Get products
    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = async () => {
        try {
            const data = await fetchProducts(); // Llama a la función asíncrona y espera a que se resuelva
            setItems(data); // Actualiza el estado con los datos obtenidos
        } catch (error) {
            console.error("Error fetching products:", error); // Manejo de errores
        }}; 
            getProducts();
    }, [])

    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            OpenProductDetail,
            CloseProductDetail,
            IsProductDetailOpen,
            ProductToShow,
            setProductToShow,
            CartProducts,
            setCartProducts,
            OpenCheckoutSideMenu,
            CloseCheckoutSideMenu,
            IsCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems
        }}>
            {children}
        </ShopingCartContext.Provider>
    );
};
