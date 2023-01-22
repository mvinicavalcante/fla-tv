import './styles.scss'

import parceiroMaster from '../../assets/parceiro-master.svg'

const Footer = () => {
    return(
        <div className="footer">
            <img src={parceiroMaster} />
            <div className='footer-rodape'>
                <p>Desenvolvido por <strong>Marcos Vinícius</strong> ©</p>
            </div>
        </div>
    )
}

export default Footer