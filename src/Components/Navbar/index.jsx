import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"

    // Extract count from ShopingCartContext using useContext.
    const { count } = useContext(ShopingCartContext)

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
                        to="/clothes"
                        className={({ isActive }) =>    
                            isActive ? activeStyle : undefined      
                        }>                     
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronics"
                        className={({ isActive }) =>    
                            isActive ? activeStyle : undefined      
                        }>  
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/furnitures"
                        className={({ isActive }) =>    
                            isActive ? activeStyle : undefined      
                        }>  
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/toys"
                        className={({ isActive }) =>    
                            isActive ? activeStyle : undefined      
                        }>  
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/others"
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
                <li>
                    🛒 {count}
                </li>
            
            </ul>   
        </nav>
        
    )
}


export default Navbar