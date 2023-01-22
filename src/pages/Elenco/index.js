import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Elenco = () => {
    return(
        <div>
            <Header 
                home={false}
                tabela={false}
                elenco={true}
                login={false} 
            />
            <Footer />
        </div>
    )
}

export default Elenco