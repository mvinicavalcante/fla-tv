import './styles.scss'
import BannerImg from '../../assets/jogo-aovivo.svg' 

const Banner = () => {
    return(
        <div className="banner">
            <img className='svg' src={BannerImg}/>
            <div className='infos'>
                <label className='live'>
                    Ao vivo
                </label>
                <h2 className='teams'>Flamengo x Palmeiras</h2>
                <h3 className='competition-name'>Supercopa do Brasil</h3>
            </div>
        </div>
    )
}

export default Banner