import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import ShoppingCart from '/src/Components/ShoppingCart';


const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    //Extract count from ShopingCartContext using useContext.
    const { CartProducts, signOut, setSignOut, account, parsedAccount, hasUserAnAccount } = useContext(ShopingCartContext);

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


    return (
        <nav className="flex justify-between items-center bg-white fixed w-full z-10 top-0 py-5 px-8 h-[68px] text-sm font-light">
            <ul className="flex items-center gap-3" >
                <li className="font-semibold text-lg">

                    <NavLink 
                        to="/"
                        >BestBuyMarket
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
                {renderView()}
                <ShoppingCart />
            </ul>   
        </nav>
        
    )
}


export default Navbar