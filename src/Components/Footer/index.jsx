import { SocialIcon } from 'react-social-icons'
import { Link  } from "react-router-dom";
import { useDevice } from "../../Context/deviceContext";



const Footer = () => {

    const Icon = ({ url,label }) => (
    <SocialIcon url={url} style={{ height: 40, width: 40 }} aria-label={label} />
    )

    const { isMobile } = useDevice();

    return (
        <footer className={`footer relative w-full bg-[#1f2937] ${isMobile ? "h-max" : "h-56"}`} >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#4a91e2] to-[#50e3c3]" />

            <div className={`grid h-full ${isMobile ? "grid-rows-3 py-11" : "grid-cols-3"}`} >
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

                <div className="grid grid-rows-2 h-full justify-items-center items-end py-6">
                    <Link  
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={`${isMobile ? "pb-10 " : "pb-3"} text-3xl w-3/5 font-semibold text-[#4A90E2] shadow-sm border-b-2 text-center border-b-white cursor-pointer`} >
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
            <div className='w-full h-[45px] bg-[#1f2937] '>
                <p className='flex text-sm font-thin text-white justify-center '>© 2025 Best Buy Market Design by
                    <a href="https://camiloramos99.github.io/CamiloRamosPortfolio/" target='blank' className='cursor-pointer hover:text-[#00a376] ml-1'>    
                        <span className='font-thin'>Camilo Ramos</span>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
