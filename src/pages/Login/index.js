import Header from "../../components/Header"

const Login = () => {
    return(
        <div>
            <Header 
                home={false}
                tabela={false}
                elenco={false}
                login={true} 
            />
        </div>
    )
}

export default Login