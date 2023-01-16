import './styles.scss'
import logo from '../../assets/logo-fla.svg'

import { useState } from 'react'

const Header = ({ home, tabela, elenco, login}) => {

    function toggleMenuMobile() {
        setShowMenuMobile(!showMenuMobile)
    }

    const [showMenuMobile, setShowMenuMobile] = useState(false)

    return(
        <div className='header'>
            <ul id='desktop'>
                <li>
                    {home ?
                        <>
                            <a href='/'>Início</a>
                            <div className='line'/>
                        </>
                        :
                        <>
                            <a href='/'>Início</a>
                        </>
                        
                    }
                </li>

                <li>
                    {tabela ?
                        <>
                            <a href='/tabelas'>Tabela</a>
                            <div className='line'/>
                        </>
                        :
                        <>  
                            <a href='/tabelas'>Tabela</a> 
                        </>
                       
                    }
                </li>

                <li>
                    <img 
                        src={logo}
                        width={45}
                    />
                </li>

                <li>
                    {elenco ?
                        <>
                            <a href='/elenco'>Elenco</a>
                            <div className='line'/>
                        </>
                        :
                        <>
                            <a href='/elenco'>Elenco</a>
                        </>
                    }
                </li>
                
                <li>
                    {login ?
                        <>
                            <a href='/login'>Login</a>
                            <div className='line'/>
                        </>
                        :
                        <>
                            <a href='/login'>Login</a>
                        </>
                    }
                </li>
            </ul>
            
            <ul id='mobile'>
                <li>
                    <img 
                        src={logo}
                        width={45}
                    />
                </li>
                <li>
                    <button onClick={toggleMenuMobile}>
                        <div className='menu-mobile'/>
                        <div className='menu-mobile'/>
                        <div className='menu-mobile'/>
                    </button>
                </li>
                
            </ul>

            {showMenuMobile &&
            <>
                <div className='submenu-mobile' />
                <div className='submenu-mobile-itens'>
                    <button id='mobile' onClick={toggleMenuMobile}>Voltar</button>
                    <ul>
                        <li>
                            <a href='/'>Início</a>
                        </li>
                        <li>
                            <a href='/tabelas'>Tabelas</a>
                        </li>
                        <li>
                            <a href='/elenco'>Elenco</a>
                        </li>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                    </ul>
                </div>
            </>
                
            }
            
        </div>
    )

}

export default Header