import { useContext } from "react";
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
            <li className="text-black/60">
                {parsedAccount?.email}
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
           </>
          )
        } else {
            return (
                <li>
                <NavLink
                    to="/sign-in"
                    className={({ isActive }) => isActive ? activeStyle : undefined }
                    >Sign in
                </NavLink>
                </li>
            )
          }
        } 

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
    };

    return (
        <nav className="flex flex-col items-center bg-[#131921] text-white fixed w-full z-10 top-0 py-1 px-12 h-[100px] text-sm font-light">
            <section className="flex flex-row items-center justify-between w-full h-2/3 ">
                <ul className="flex items-center  h-full" >
                    <li className="font-semibold text-lg">
                        <NavLink
                        to="/"
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

                <ul className="w-3/4 ">
                    <li className="w-full text-black">
                        <input 
                            type="text"  
                            value={searchQuery}
                            placeholder="search for products, categories and more.." 
                            className={`rounded-lg border border-black p-3 mb-0 ${isMobile ? 'w-full' : 'w-[500px]'}`}
                            onChange={handleInputChange}
                        />
                    </li>
                </ul> 
            
                <ul className="flex justify-between gap-3">
                    {renderView()}
                    <ShoppingCart />
                </ul> 
            </section>

            <section className="flex flex-row w-full h-1/3">
                <ul className={`flex  ${isMobile ? "gap-14" : "gap-16"} w-[56rem] justify-center items-center`}>          
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