import { useContext, useState, useRef } from 'react'
import { ShopingCartContext } from '../../Context'
import Layout from "../../Components/Layout"

function MyAccount() {
    const { account, setSignOut, setAccount, parsedAccount, hasUserAnAccount, setParsedAccount } = useContext(ShopingCartContext);
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    const editAccount = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current)
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            }
    
        // Update account
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        setAccount(data);
        setParsedAccount(data);
        setView('user-info');
      }

    const renderUserInfo = () => {
        return (
          <div className='flex flex-col w-80'>
            <p>
              <span className='font-light text-sm'>Name: </span>
              <span>{parsedAccount?.name}</span>
            </p>
            <p>
              <span className='font-light text-sm'>Email: </span>
              <span>{parsedAccount?.email}</span>
            </p>
            <button
              className='border border-black rounded-lg mt-6 py-3'
              onClick={() => setView('edit-user-info')}>
              Edit
            </button>
          </div>
        )
      }

      const renderEditUserInfo = () => {
        return (
            <form ref={form} className="form flex flex-col mt-1 h-full w-full" onSubmit={editAccount} >

            <label htmlFor="Name" className="font-medium font-sans mb-1">Name</label>
            <input 
                type="text" 
                id="name"
                name="name"
                defaultValue={parsedAccount?.name}
                placeholder="your name"
                className="input input-email text-base border border-black rounded-lg h-10 p-2 mb-5 "
            />
            <label htmlFor="email" className="font-medium font-sans mb-1">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email"
                defaultValue={parsedAccount?.email}
                placeholder="hi@helloworld.com" 
                className="input input-email bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 " 
            />
            <label htmlFor="password" className="font-medium font-sans mb-1">Your password</label>
            <input 
                type="text" 
                id="password"  
                name='password' 
                defaultValue={parsedAccount?.password}
                placeholder="***********" 
                className=" bg-text-input-field text-base rounded-lg h-10 p-2 mb-5 "
            />

            <button 
                className="place-self-center font-bold bg-purple-500 text-white rounded-lg h-12 w-full mt-6 mb-7"
                type="submit"
                >Edit</button>
        
        </form>
        )
      }
    
      const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-full h-[calc(100vh-80px)]">
            <div className="login-container flex flex-col h-full w-80 ">
                <title className="flex flex-col font-sans font-semibold text-xl mb-6 ">My account</title>
                {renderView()}
            </div>     
        </div>   
      </Layout>
    )
  }
  
  export default MyAccount