import './styles.scss'
import BannerImg from '../../assets/jogo-aovivo.svg' 

const Banner = () => {
    return(
        <div className="banner">
            <img className='svg' src={BannerImg}/>
        </div>
    )
}

export default Banner