import { useState, useEffect } from "react";
import styles from "./Item.module.css"
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export function Item ({ id, nombre, precio, stock, imagen }){
    const producto = {id, nombre, precio, stock, imagen};
    const [cantidad, setCantidad] = useState(0);
    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    const decrementar = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    };
    useEffect(() => {
        console.log("El componente se renderizó o el contador cambió.");
    }, [cantidad]);

    const { addToCart } = useCart();

    const handleAddtoCart = () => {
        if (cantidad <= 0) {
            alert("Seleccioná al menos 1 unidad.");
            return;
        }
        addToCart(producto, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    };

    return(
        <div className={styles.tarjeta}>
            <img className={styles.img} src={imagen} alt={nombre} />
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.precio}>Precio: ${precio}</p>
            <p className={styles.stock}>Stock disponible: {stock}</p>
            <Link to={`/producto/${id}`}>Ver Detalle</Link>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:
'center', margin: '10px 0' }}>
                <button className={styles.botonesCantidad} onClick={decrementar}>-</button>
                <p style={{margin:'0 10px'}}>{cantidad}</p>
                <button className={styles.botonesCantidad} onClick={incrementar}>+</button>
            </div>
            <button className={styles.comprar} onClick={handleAddtoCart}>Agregar al carrito</button>
        </div>
    );
}