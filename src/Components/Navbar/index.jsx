import { useContext, useEffect, useRef, useState } from "react";
import { ShopingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { useDevice } from "../../Context/deviceContext";
import logo from "../../../src/assets/logo.png"
import ShoppingCart from "/src/Components/ShoppingCart";


const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    //Extract count from ShopingCartContext using useContext.
    const { CartProducts, signOut, setSignOut, account, parsedAccount, hasUserAnAccount, searchQuery, setSearchQuery  } = useContext(ShopingCartContext);
    const { isMobile } = useDevice();

    const [ hidden, setHidden ] = useState(false);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop.current) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

           return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, []);

    //Is user sign out?.
    const signOutInLocalStorage  = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOutInLocalStorage);
    const isUserSignOut = parsedSignOut || signOut;

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", stringifiedSignOut);
        setSignOut(true);
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
          return (
           <>
            <li className="text-[#4A90E2]">
                <p>Hi {parsedAccount?.name}!</p>
            </li>
            <li>
                <NavLink 
                    to="/my-orders"
                    className={({ isActive }) =>    
                        isActive ? activeStyle : undefined      
                    }>  
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/my-account"
                    className={({ isActive }) =>    
                        isActive ? activeStyle : undefined      
                    }>  
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/sign-in"
                    className={({ isActive }) =>    
                        isActive ? activeStyle : undefined      
                    }
                    onClick={() => handleSignOut()}>  
                    Sign out
                </NavLink>
            </li>
                <ShoppingCart />
           </>
          )
        } else {
            return (
            <>
                <li className="min-w-max">
                <NavLink
                    to="/sign-in"
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    Sign in
                </NavLink>
                </li>
                <ShoppingCart />
            </>
            )
          }
        } 

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
    };

    return (
        <nav className={`flex flex-col items-center bg-[#131921] text-white fixed top-0 left-0 w-full transition-transform duration-300 ${ hidden ? "-translate-y-full" : "translate-y-0"} z-10 py-1 h-[100px] text-sm font-light ${isMobile ? "px-1" : "px-12"}`}>
            <section
                className={`${
                    isMobile ? "flex justify-between items-center w-full px-2" : "grid grid-cols-3"
                } max-w-screen-lg mx-auto w-[96%] h-2/3 gap-4`}
            >


                <ul className="flex items-center  h-full" >
                    <li className="font-semibold text-lg">
                        <NavLink
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={
                            isMobile
                            ? "" 
                            : "text-xl font-semibold text-[#4A90E2] shadow-sm bg-gradient-to-r from-[#4a91e269] to-[#50e3c371] bg-opacity-30 px-3 py-2 rounded-lg hover:text-white transition duration-300 ease-in-out"
                        }
                        >
                        {isMobile ? <img src={logo} alt="Logo" className="h-8" /> : "BestBuyMarket"}
                        </NavLink>
                    </li>
                </ul>   

                <ul className={`flex justify-center ${isMobile ? "w-[60%]" : "w[100%]"}`}>
                    <li className="w-full max-w-md text-black">
                        <input 
                            type="text"  
                            value={searchQuery}
                            placeholder={`${isMobile ? "Search products..." : "Search for products, categories and more.."}`}
                            className="rounded-lg border border-black p-3 mb-0 w-full"
                            onChange={handleInputChange}
                        />
                    </li>
                </ul> 
            
                <ul className="flex justify-end items-center gap-3">
                    {renderView()}
                </ul> 
            </section>

            <section className="flex flex-row w-full h-1/3">
                <ul className={`flex  ${isMobile ? "gap-4" : "gap-6"} w-[56rem] max-w-screen-lg mx-auto justify-center items-center`}>          
                    <li>
                        <NavLink 
                            to="/category/clothes"
                            className={({ isActive }) =>    
                                isActive ? activeStyle : undefined      
                            }>                     
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/electronics"
                            className={({ isActive }) =>    
                                isActive ? activeStyle : undefined      
                            }>  
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/furnitures"
                            className={({ isActive }) =>    
                                isActive ? activeStyle : undefined      
                            }>  
                            Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/toys"
                            className={({ isActive }) =>    
                                isActive ? activeStyle : undefined      
                            }>  
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/others"
                            className={({ isActive }) =>    
                                isActive ? activeStyle : undefined      
                            }>  
                            Others
                        </NavLink>
                    </li>
                </ul>
            </section>  
        </nav>
    )
}


export default Navbar