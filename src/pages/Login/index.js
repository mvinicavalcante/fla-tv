import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Login = () => {
    return(
        <div>
            <Header 
                home={false}
                tabela={false}
                elenco={false}
                login={true} 
            />
            <Footer />
        </div>
    )
}

export default Login