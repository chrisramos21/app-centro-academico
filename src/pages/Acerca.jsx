import './Acerca.css'
import MenuLateral from "../components/MenuLateral"
import Contenido from "../components/Contenido"
const Acerca = () => {
    return (
        <div className="acerca">
            <MenuLateral />
            <div className="acerca-contenido">
                <main className="acerca-principal">
                    <section className="acerca-titulo">
                        <h2 className="acerca-titulo-texto">Acerca de...</h2>
                    </section>
                    <Contenido />
                </main>
            </div>
        </div>
    )
}

export default Acerca