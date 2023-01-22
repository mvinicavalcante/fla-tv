import Header from "../../components/Header"
import './styles.scss'

import Banner from "../../components/Banner"
import Footer from "../../components/Footer"

const Home = () => {
    return(
        <>
            <Header 
                home={true}
                tabela={false}
                elenco={false}
                login={false} 
            />

            <div className="home">
                <Banner />
            </div>

            <Footer />
        </>
        
    )
}

export default Home