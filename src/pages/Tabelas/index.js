import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Tabelas = () => {
    return(
        <div>
            <Header 
                home={false}
                tabela={true}
                elenco={false}
                login={false} 
            />
            <Footer />
        </div>
    )
}

export default Tabelas