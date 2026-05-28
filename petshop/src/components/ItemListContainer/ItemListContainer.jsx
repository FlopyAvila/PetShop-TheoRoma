import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css"

export function ItemListContainer({ Mensaje }){
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((respuesta) => {
                if(!respuesta.ok){
                    throw new Error('No se pudo cargar la información de  los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error){
        return <p>Error: {error}</p>;
    }

    return(
        <div >
            <h2 className={styles.subtitulo} >{ Mensaje }</h2>
            <div>
                <ItemList productos={productos}/>
            </div>
        </div>
    );
}