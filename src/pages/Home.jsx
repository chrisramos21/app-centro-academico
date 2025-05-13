import Contenido from "../components/Contenido"
import MenuLateral from "../components/MenuLateral"
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <MenuLateral />
            <div className="home-contenido">
                <main className="home-principal">
                    <section className="home-titulo">
                        <h2 className="home-titulo-texto">Estás en el home</h2>
                    </section>
                    <Contenido />
                </main>
            </div>
        </div>
    )
}

export default Home