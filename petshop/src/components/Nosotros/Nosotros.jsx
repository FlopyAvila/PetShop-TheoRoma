import { useEffect, useState } from "react";
import styles from "./Nosotros.module.css"

function Nosotros({Mensaje}){
    const [nosotros, setNosotros] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then((respuesta) => {
                if(!respuesta.ok){
                    throw new Error('No se pudo cargar la información de nosotros');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setNosotros(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            })
    }, []);

    if (cargando) {
        return <p>Cargando datos, por favor espere...</p>;
    }
    if (error){
        return <p>Error: {error}</p>;
    }
    
    return(
        <div>
            <h1>{Mensaje}</h1>
            <ul className={styles.equipo}>
                {nosotros.map((nosotros) => (
                    <li className={styles.miembro} key={nosotros.id}>
                        <img className={styles.avatar} src={nosotros.foto} alt={nosotros.foto} />
                        <h2>{nosotros.nombre}</h2>
                        <h3>Puesto: {nosotros.puesto}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nosotros;