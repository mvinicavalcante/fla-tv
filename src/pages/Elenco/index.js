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
        </div>
    )
}

export default Elenco