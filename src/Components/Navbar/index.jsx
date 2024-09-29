import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"

    // Extract count from ShopingCartContext using useContext.
    const { CartProducts } = useContext(ShopingCartContext)

    return (
        <nav className="flex justify-between items-center fixed w-full z-10 top-0 py-5 px-8 h-[68px] text-sm font-light">
            <ul className="flex items-center gap-3" >
                <li className="font-semibold text-lg">
                    <NavLink 
                        to="/">
                        BestBuyMarket
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>    
                            isActive ? activeStyle : undefined      
                        }> 
                        All
                    </NavLink>
                </li>
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
            <ul className="flex justify-between gap-3">
                <li className="text-black/60">
                    BestBuyMarket@gmail.com
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
                        }>  
                        Sign In
                    </NavLink>
                </li>
                <li className="relative">
                    <svg className="absolute size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" > 
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs transform translate-x-1/2 -translate-y-1/2">{ CartProducts.length }</span>
                </li>
            
            </ul>   
        </nav>
        
    )
}


export default Navbar