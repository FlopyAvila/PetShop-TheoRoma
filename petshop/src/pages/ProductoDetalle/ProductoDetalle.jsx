import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import styles from './ProductoDetalle.module.css';


const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(()=> {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("error al cargar el producto:", error))
            .finally(() => setCargando(false));
    }, [id]);

    if (cargando) {
        return <p className={styles.cargando}>Cargando detalle...</p>;
    }

    if (!producto){
        return <h2>Cargando detalle...</h2>;
    }

    if (!producto.id){
        return <h2>Producto no encontrado...</h2>;
    }

    return (
        <div className={styles.pagina}>
            <Link to="/productos" className={styles.volver}>← Volver al catálogo</Link>

            <div className={styles.card}>
                <img
                    className={styles.imagen}
                    src={producto.imagen}
                    alt={producto.nombre}
                />
                <div className={styles.info}>
                    {producto.categoria && (
                        <span className={styles.categoria}>{producto.categoria}</span>
                    )}
                    <h2 className={styles.nombre}>{producto.nombre}</h2>
                    <p className={styles.precio}>
                        ${producto.precio.toLocaleString('es-AR')}
                    </p>
                    {producto.descripcion && (
                        <p className={styles.descripcion}>{producto.descripcion}</p>
                    )}
                    <p className={styles.stock}>
                        Stock disponible:{" "}
                        <span className={styles.stockOk}>{producto.stock} unidades</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;