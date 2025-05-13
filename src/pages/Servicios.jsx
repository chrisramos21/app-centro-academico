import './Servicios.css'
import MenuLateral from "../components/MenuLateral"
import Contenido from "../components/Contenido"
const Servicios = () => {
    return (
        <div className="servcio">
            <MenuLateral />
            <div className="servicio-contenido">
                <main className="servicio-principal">
                    <section className="servicio-titulo">
                        <h2 className="servicio-titulo-texto">Servicios</h2>
                    </section>
                    <Contenido />
                </main>
            </div>
        </div>
    )
}

export default Servicios