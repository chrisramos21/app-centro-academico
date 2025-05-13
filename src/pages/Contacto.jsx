import './Contacto.css'
import MenuLateral from "../components/MenuLateral"
import Contenido from "../components/Contenido"
const Contacto = () => {
    return (
        <div className="contacto">
            <MenuLateral />
            <div className="contacto-contenido">
                <main className="contacto-principal">
                    <section className="contacto-titulo">
                        <h2 className="contacto-titulo-texto">Contactos</h2>
                    </section>
                    <Contenido />
                </main>
            </div>
        </div>
    )
}

export default Contacto