import { useContext, useState, useRef } from "react";
import Layout from "../../Components/Layout";
import { Link, useNavigate } from 'react-router-dom'
import { ShopingCartContext } from "../../Context";

function SignIn() {
  const { account, setSignOut, setAccount, parsedAccount, hasUserAnAccount } = useContext(ShopingCartContext); 
  const [view, setView] = useState("user-info");
  const form = useRef(null)
  const navigate = useNavigate();

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    setSignOut(false);
    // Redirect 
    navigate('/');
  };


  const createAnAccount = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }

      //Create account
      const stingifiedAccount = JSON.stringify(data);
      localStorage.setItem("account", stingifiedAccount);
      setAccount(data);
      //Sign in
      handleSignIn()
  }
  

  const renderLogIn = () => {
    return (
      <div className="login-container flex flex-col h-full w-80 ">
      <h1 className="flex font-sans justify-center font-medium mb-6">Welcome! Let's get started</h1>
      <div className="form flex flex-col mt-3 h-full w-full" >
        <label htmlFor="email" className="text-sm font-semibold font-sans mb-1">Email</label>
        <input 
            type="text" 
            id="email" 
            placeholder={parsedAccount?.email || "your email"}
            className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " 
        />     
        <label htmlFor="password" className="text-sm font-semibold font-sans mb-1">Password</label>
        <input 
            type="password" 
            id="password"   
            placeholder={parsedAccount?.password || "your password"} 
            className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-6 "
        />
        <Link to="/">
          <button 
              className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mb-4"
              onClick={ () => handleSignIn() }
              disabled={!hasUserAnAccount}>
                Log in
          </button>
        </Link>
        

        <a href="/" className="flex self-center text-sm font-sans text-purple-500 mb-4" >Forgot my password</a>  

        <button 
            className="place-self-center font-bold border-x border-y border-purple-500 bg-white text-purple-500 rounded-lg h-12 w-full mb-24 cursor-pointer "      
            onClick={() => setView("create-user-info")}
            disabled={hasUserAnAccount}>
            Sign up
        </button>
    </div>
    </div>     
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <div className="flex items-center justify-center relative w-full h-[calc(100vh-80px)]">
            <div className="login-container flex flex-col h-full w-80 ">
                <title className="flex flex-col font-sans font-semibold text-xl mb-6 ">Create your account</title>
 
                <form ref={form} className="form flex flex-col mt-1 h-full w-full" onSubmit={createAnAccount}>

                <label htmlFor="Name" className="font-medium font-sans mb-1">Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="your name"
                    defaultValue={parsedAccount?.name}
                    className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "
                />
                <label htmlFor="email" className="font-medium font-sans mb-1">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="camiloramos99@outlook.com" 
                    defaultValue={parsedAccount?.email}
                    className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " />
                
                <label htmlFor="password" className="font-medium font-sans mb-1">Password</label>
                <input 
                    type="password" 
                    id="password"   
                    name="password"
                    placeholder="***********" 
                    defaultValue={parsedAccount?.password}
                    className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "
                />
    
                <button 
                    className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mt-6 mb-7" type="submit"
                    >Create 
                </button>   
                </form>
            </div>     
        </div>   
    )
  }

  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();
  
    return (
      <Layout>
      {renderView()}
      </Layout>
    )
  }
  
  export default SignIn
  