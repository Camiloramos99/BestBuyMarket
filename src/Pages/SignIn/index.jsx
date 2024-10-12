import { useContext, useState } from "react";
import Layout from "../../Components/Layout";
import { ShopingCartContext } from "../../Context";

function SignIn() {
  const { account } = useContext(ShopingCartContext); 
  const [view, setView] = useState("user-info");

  //Account
  const accountInLocalStorage = localStorage.getItem("account");
  const parsedAccount = JSON.parse(accountInLocalStorage);
  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const renderLogIn = () => {
    return (
      <div className="login-container flex flex-col h-full w-80 ">
      <form action="/" 
            className="form flex flex-col mt-3 h-full w-full" >
        <label 
            htmlFor="email" 
            className="text-sm font-semibold font-sans mb-1"
            >Email
          </label>
        <input 
            type="text" 
            id="email" 
            placeholder={parsedAccount?.email || "your email"}
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " />
        
        <label 
            htmlFor="password" 
            className="text-sm font-semibold font-sans mb-1"
            >Password
        </label>
        <input 
            type="password" 
            id="password"   
            placeholder={parsedAccount?.password || "your password"} 
            className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-6 "/>

        <button 
            className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mb-4"
            disabled={!hasUserAnAccount}>
              Log in
        </button>

        <a href="/" className="flex self-center text-sm font-sans text-purple-500 mb-4" >Forgot my password</a>  

        <button 
            className="place-self-center font-bold border-x border-y border-purple-500 bg-white text-purple-500 rounded-lg h-12 w-full mb-24 cursor-pointer "      
            onClick={() => setView("create-user-info")}
            disabled={hasUserAnAccount}>
            Sign up
        </button>
    </form>
    </div>     
    )
  }

  const renderCreateUserInfo = () => {
    // TODO : Create renderView
  }

  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();
  
    return (
      <Layout>
      <h1 className="flex font-sans justify-center font-medium mb-6">Welcome! Let's get started</h1>
      {renderView()}
      </Layout>
    )
  }
  
  export default SignIn