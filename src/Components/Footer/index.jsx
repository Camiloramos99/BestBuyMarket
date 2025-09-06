import { SocialIcon } from 'react-social-icons'
import { Link  } from "react-router-dom";


const Footer = () => {

    const Icon = ({ url,label }) => (
    <SocialIcon url={url} style={{ height: 40, width: 40 }} aria-label={label} />
    )

    return (
        <footer className="footer relative w-full h-56 bg-[#1f2937]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#4a91e2] to-[#50e3c3]" />

            <div className="grid grid-cols-3 h-full">
                <div className="grid">
                    <ul className='flex flex-col w-full h-full text-white justify-center items-center list-none space-y-2'>
                        <li>
                          <a className="text-gray-400 hover:text-white transition cursor-pointer">Sobre nosotros</a>                                                        
                        </li>
                        <li>
                          <a className="text-gray-400 hover:text-white transition cursor-pointer">Términos y condiciones</a>                            
                        </li>
                        <li>
                          <a className="text-gray-400 hover:text-white transition cursor-pointer">Política de privacidad</a>
                        </li>
                    </ul>
                </div>

                <div className="grid grid-rows-2 h-full justify-items-center items-end ">
                    <Link  
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-3xl w-3/5 pb-3 font-semibold text-[#4A90E2] shadow-sm border-b-2 text-center border-b-white cursor-pointer" >
                            Best Buy Market
                    </Link>
                    <div className="flex w-full h-full justify-center items-center gap-6 ">
                        <Icon url="https://facebook.com" label="Facebook"/>
                        <Icon url="https://instagram.com" label="Instagram"/>
                        <Icon url="https://youtube.com" label="Youtube"/>
                        <Icon url="https://pinterest.com" label="Pinterest"/>
                        <Icon url="https://linkedin.com" label="LinkedIn"/>                        
                    </div>
                </div>

                <div className="flex">
                    <ul className='flex flex-col w-full h-full text-white justify-center items-center list-none space-y-2'>
                        <li>
                            <a className="text-gray-400 hover:text-white transition cursor-pointer">Preguntas frecuentes</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white transition cursor-pointer">Centro de ayuda</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white transition cursor-pointer">Seguimiento de pedidos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
