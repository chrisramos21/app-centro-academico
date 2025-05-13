import './Acerca.css'
import MenuLateral from "../components/MenuLateral"
const Acerca = () => {
    return (
        <div className="acerca">
            <MenuLateral />
            <div className="acerca-contenido">
                <main className="acerca-principal">
                    <section className="acerca-titulo">
                        <h2 className="acerca-titulo-texto">Acerca de...</h2>
                    </section>
                    <div>
                        <img src="/imagenes/acerca.jpg" alt="Acerca de nosotros" />

                        <section>
                            <h3>Historia de la Institución</h3>
                            <p>
                                Nuestro centro educativo fue fundado en el año 2001 con el propósito de brindar educación de calidad.
                            </p>
                        </section>

                        <section>
                            <h3>Misión y Visión</h3>
                            <p><strong>Misión:</strong> Formar estudiantes con excelencia académica y valores sólidos.</p>
                            <p><strong>Visión:</strong> Ser una institución líder en educación integral.</p>
                        </section>

                        <section>
                            <h3>Equipo docente</h3>
                            <p>Contamos con un equipo docente altamente calificado y comprometido.</p>
                            <img src="/imagenes/profesor1.jpg" alt="Profesor 1" />
                            <img src="/imagenes/profesor2.jpg" alt="Profesor 2" />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Acerca