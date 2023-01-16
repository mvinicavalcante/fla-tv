import Header from "../../components/Header"
import './styles.scss'

import Banner from "../../components/Banner"

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
        </>
        
    )
}

export default Home