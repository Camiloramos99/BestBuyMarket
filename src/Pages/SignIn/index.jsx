import Layout from "../../Components/Layout"

function SignIn() {
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-full h-[calc(100vh-80px)]">
          <div className="login-container flex flex-col h-full w-80 ">
            <form action="/" 
                  className="form flex flex-col mt-10 h-full w-full" >
              <label 
                  htmlFor="email" 
                  className="font-medium font-sans mb-1"
                  >Email address
                </label>
              <input 
                  type="text" 
                  id="email" 
                  placeholder="camiloramos99@outlook.com" 
                  className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " />
              
              <label 
                  htmlFor="password" 
                  className="font-medium font-sans mb-4"
                  >Password
              </label>
              <input 
                  type="password" 
                  id="password"   
                  placeholder="***********" 
                  className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "/>
 
              <button className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mb-7">Log in</button>
              <a href="/" className="flex self-center text-base font-thin text-purple-500" >Forgot my password</a>
            
            </form>

          <button 
              className="place-self-center font-bold border-x border-y border-purple-500 bg-white text-purple-500 rounded-lg h-16 w-full mb-24 " 
              >Sign up
          </button>
          </div>     
        </div>   
      </Layout>
    )
  }
  
  export default SignIn