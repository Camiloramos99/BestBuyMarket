import { createContext, useState, useEffect, u } from "react";
import { fetchProducts } from "../api"
import { useLocation } from 'react-router-dom';



export const ShopingCartContext = createContext();

export const InitializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem("account");
    const signOutInLocalStorage = localStorage.getItem("sign-out");
    let parsedAccount                            
    let parsedSignOut
    
    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))     //establece y guarda objeto vacio({}) como cadena de texto JSON
        parsedAccount = {}                                      
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)       //convierte esa cadena de texto en un objeto
    }
    
    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShopingCartProvider = ({ children }) => {

    // My Account
    const [account, setAccount] = useState({});

    // Sign out
    const [signOut, setSignOut] = useState(false);



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
    const [items, setItems] = useState(null);

    // Get products filtered
    const [filteredItems , setFilteredItems ] = useState(null);

    // State to manage the search query input
    const [searchQuery, setSearchQuery] = useState("");

    // State to manage the category state
    const [selectedCategory, setSelectedCategory] = useState("");

    // Function to filter items based on the search query
    const filterItems = (items, query, category) => {
        if (!query && !category) return items;
        const lowerCaseQuery = query.toLowerCase();
    // Filter the items array based on whether the item's title or category includes the query
        return items?.filter(item => 
            (item.title.toLowerCase().includes(lowerCaseQuery) || 
            item.category.toLowerCase().includes(lowerCaseQuery)) &&
            (!category || item.category.toLowerCase() === category.toLowerCase())//Pasa este filtro si la url es vacia la categoria o null y solo pasaran los items que la categoria sea igual a la del link(category)
        );
    };


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


    useEffect(() => {
        setFilteredItems(filterItems(items, searchQuery, selectedCategory));
    }, [items, searchQuery, selectedCategory]);

    useEffect(() => {
        // Limpia la búsqueda cuando cambia la ruta
        setSearchQuery("");
    }, [location.pathname]);


    



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
            setItems,
            searchQuery,
            setSearchQuery,
            filteredItems,
            setSelectedCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShopingCartContext.Provider>
    );
};
