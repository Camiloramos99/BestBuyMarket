import Layout from "../../Components/Layout"

function SignUp() {
    return (
        <Layout>
        <div className="flex items-center justify-center relative w-full h-[calc(100vh-80px)]">
            <div className="login-container flex flex-col h-full w-80 ">
                <title className="flex flex-col font-sans font-semibold text-xl mb-6 ">Create your account</title>
 
                <form action="/" 
                    className="form flex flex-col mt-1 h-full w-full" >
                <label 
                    htmlFor="Name"
                    className="font-medium font-sans mb-1"
                    >Name
                </label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="your name"
                    className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "
                    />
                <label 
                    htmlFor="email" 
                    className="font-medium font-sans mb-1"
                    >Email
                </label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder="camiloramos99@outlook.com" 
                    className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " />
                
                <label 
                    htmlFor="password" 
                    className="font-medium font-sans mb-1"
                    >Password
                </label>
                <input 
                    type="password" 
                    id="password"   
                    placeholder="***********" 
                    className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "/>
    
                <button className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mt-6 mb-7">Create</button>
                
                </form>


            </div>     
        </div>   

        </Layout>
    )
} 

export default SignUp